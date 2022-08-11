//TODO add to Favorites functionality
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as journalService from "../../services/journalService";
import { JournalContext } from "../../contexts/JournalContext";

const EditEntry = () => {
  const navigate = useNavigate();
  const { journalEntryId } = useParams();
  const { entries } = useContext(JournalContext);
  const journalEntry = entries.find((entry) => entry._id === journalEntryId);

  const [currentEntry, setCurrentEntry] = useState(journalEntry);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    journalService.getOne(journalEntryId).then((entryData) => {
      setCurrentEntry(entryData);
    });
  }, [journalEntryId]);

  const backClickHandler = () => {
    navigate(-1);
  };

  const editEntryHandler = (e) => {
    e.preventDefault();
    if(currentEntry.title === '' || currentEntry.journalEntry === '') {
      setFormError(true);
      return;
    };
    
    if (currentEntry.title !== '' && currentEntry.journalEntry !== '') {
      setFormError(false);
    };
    
    if(isFormNotValid) {
      return;
    }

    journalService.edit(journalEntryId, currentEntry).then((result) => {
      setCurrentEntry(result);
    });
    navigate(-1);
  };

  const onChange = (e) => {
    setCurrentEntry((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
    if(!errors) {
      setFormError(false);
    }
  };

  const minLength = (e, limit) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: currentEntry[e.target.name].length < limit,
    }));
  };

  const isFormNotValid = Object.values(errors).some((x) => x);

  return (
    <div>
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>

      <form
        onSubmit={editEntryHandler}
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
      >
        <div className="flex flex-col gap-y-5 ">
          <h1 className="text-center">Edit</h1>
          <div className="flex gap-x-3 border-b-2">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Entry Title"
              className="outline-hidden focus:outline-none w-full"
              onChange={onChange}
              value={currentEntry.title}
              onBlur={(e) => minLength(e, 3)}
            />
          </div>
          {errors.title && (
              <p className="text-red-500">
                Title should be at least three characters long
              </p>
            )}
          <div className="flex gap-x-3 border-b-2">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Fun"
              className="outline-hidden focus:outline-none w-full"
              onChange={onChange}
              value={currentEntry.category}
            />
          </div>
          <div className="flex gap-x-3 border-b-2">
            <label htmlFor="blog">Share this record on the Blog:</label>
            <input
              type="checkbox"
              name="blog"
              id="blog"
              className="w-5"
              checked={currentEntry.blog}
              onChange={onChange}
            />
          </div>
          {currentEntry.blog ? (
            <div className="flex gap-x-3 border-b-2">
              <label htmlFor="authorName">Author Name: </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                placeholder="Name..."
                className="max-w-[135px] focus:outline-none"
                onChange={onChange}
                value={currentEntry.authorName}
              />
            </div>
          ) : null}

          <div className="w-full">
            <textarea
              rows='10'
              name="journalEntry"
              id="journalEntry"
              placeholder="Start your entry today"
              className="outline-hidden focus:outline-none w-full"
              onChange={onChange}
              value={currentEntry.journalEntry}
              onBlur={(e) => minLength(e, 3)}
            ></textarea>
          </div>
          {errors.journalEntry && (
              <p className="text-red-500">
                Your journal entry should be at least three characters long
              </p>
            )}
            {(formError || isFormNotValid ) ? (
              <p className="text-red-500">
                Please fill out both entry title and entry text to create a
                record
              </p>
            ) : null }
          <div className="flex gap-x-3">
            <button
              className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
              onClick={backClickHandler}
            >
              Back
            </button>
            <input
              className="rounded-full border-2 border-darker-green bg-dark-green text-white px-8 py-2 cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEntry;
