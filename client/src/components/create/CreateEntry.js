//TODO add to Favorites functionality
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { JournalContext } from "../../contexts/JournalContext";
import * as journalService from "../../services/journalService";

const CreateEntry = () => {
  const { addEntry } = useContext(JournalContext);
  // const [errors, setErrors] = useState({});

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
  };

  // const isFormNotValid = !Object.values(newEntry).some((x) => x === "");
  return (
    <div className="">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      >
      </section>
      <div className="md:-mt-32">
      <form
        onSubmit={createHandler}
        id="register"
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
              className=""
              onChange={onChange}
              value={newEntry.title}
            />
          </div>

          <div className="flex gap-x-3 border-b-2">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Fun"
              className=""
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
                className="max-w-[100px]"
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
              className="border-2 w-full"
              onChange={onChange}
              value={newEntry.journalEntry}
            ></textarea>
          </div>

          <input
            className={`border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer`}
            type="submit"
            value="Create"
            // disabled={!isFormNotValid}
          />
        </div>
      </form>
      </div>
   
    </div>
  );
};

export default CreateEntry;
