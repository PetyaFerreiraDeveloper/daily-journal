//TODO add to Favorites functionality
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { JournalContext } from "../../contexts/JournalContext";
import * as journalService from "../../services/journalService";

const CreateEntry = () => {
  const { addEntry } = useContext(JournalContext);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});

  const [newEntry, setNewEntry] = useState({
    title: "",
    category: "",
    journalEntry: "",
    blog: false,
    authorName: "",
  });

  const navigate = useNavigate();

  const createHandler = (e) => {
    e.preventDefault();

    if(newEntry.title === '' || newEntry.journalEntry === '') {
      setFormError(true);
      return;
    };
    
    if (newEntry.title !== '' && newEntry.journalEntry !== '') {
      setFormError(false);
    };
    
    if(isFormNotValid) {
      return;
    }

    journalService.create(newEntry).then((result) => {
      addEntry(result);
    });

    if (newEntry.blog === true) {
      navigate("/blog", { replace: true });
    } else {
      navigate("/my-journal", { replace: true });
    }
  };

  const onChange = (e) => {
    setNewEntry((state) => ({
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
      [e.target.name]: newEntry[e.target.name].length < limit,
    }));
  };

  const isFormNotValid = Object.values(errors).some((x) => x);

  return (
    <div className="">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>
      <div className="md:-mt-32">
        <form
          onSubmit={createHandler}
          className="flex flex-col md:h-[900px] justify-center border-2 m-auto gap-y-6 py-20 px-6 bg-white"
        >
          <div className="flex flex-col gap-y-2 ">
            <div className="flex gap-x-3 border-b-2">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Entry Title..."
                className="outline-hidden focus:outline-none w-full"
                onChange={onChange}
                value={newEntry.title}
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
                value={newEntry.category}
              />
            </div>
            <div className="flex gap-x-3 border-b-2">
              <label htmlFor="blog">Share this record on the Blog:</label>
              <input
                type="checkbox"
                name="blog"
                id="blog"
                className="w-5"
                checked={newEntry.blog}
                onChange={onChange}
              />
            </div>
            {newEntry.blog ? (
              <div className="flex gap-x-3 border-b-2">
                <label htmlFor="authorName">Author Name: </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  placeholder="Name..."
                  className="max-w-[135px] focus:outline-none"
                  onChange={onChange}
                  value={newEntry.authorName}
                />
              </div>
            ) : null}

            <div className="w-full">
              <textarea
                name="journalEntry"
                id="journalEntry"
                placeholder="Start your entry today"
                rows="9"
                className="border-2 w-full focus:outline-none"
                onChange={onChange}
                value={newEntry.journalEntry}
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
            <input
              className={`border-2 bg-dark-green border-darker-green text-white rounded-full  px-8 py-2 place-self-center cursor-pointer`}
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;
