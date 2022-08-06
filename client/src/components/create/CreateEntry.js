//TODO add to Favorites functionality
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { JournalContext } from "../../contexts/JournalContext";
import * as journalService from "../../services/journalService";

const CreateEntry = () => {
  const { addEntry} = useContext(JournalContext);
  // const [errors, setErrors] = useState({});

  const [newEntry, setNewEntry] = useState({
    title: "",
    category: "",
    journalEntry: "",
    blog: false,
    authorName: ''
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
    <form
      onSubmit={createHandler}
      id="register"
      className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
    >
      <div className="flex flex-col gap-y-5 ">
        <h2 className="text-center">Create</h2>

        <div className="flex gap-x-3 justify-between">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Fun"
            className="border-2"
            onChange={onChange}
            value={newEntry.category}
          />
        </div>

        <div className="flex gap-x-3 justify-between">
          <label htmlFor="title">Entry Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Entry Title"
            className="border-2"
            onChange={onChange}
            value={newEntry.title}
          />
        </div>

        <div className="flex gap-x-3 justify-between">
          <label htmlFor="journalEntry">Todays Entry:</label>

          <textarea
            name="journalEntry"
            id="journalEntry"
            placeholder="Start your entry today"
            className="border-2"
            onChange={onChange}
            value={newEntry.journalEntry}
          ></textarea>
        </div>

        <div>
          <label htmlFor="blog">Share this record on the Blog</label>
          <input
            type="checkbox"
            name="blog"
            id="blog"
            checked={newEntry.blog}
            onChange={onChange}
          />
        </div>
        {newEntry.blog
          ? <div className="flex gap-x-3 justify-between">
              <label htmlFor="authorName">What author name do you want to post your blog with?</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                placeholder="your name"
                className="border-2"
                onChange={onChange}
                value={newEntry.authorName}
              />
            </div>
            : null
        }
        

        <input
          className={`border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer`}
          type="submit"
          value="Create"
          // disabled={!isFormNotValid}
        />
      </div>
    </form>
  );
};

export default CreateEntry;