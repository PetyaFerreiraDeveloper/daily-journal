//TODO add to Favorites functionality
import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as journalService from '../../services/journalService';
import {JournalContext} from '../../contexts/JournalContext';

const EditEntry = () => {
  const navigate = useNavigate();
  const { journalEntryId } = useParams();
  const { entries } = useContext(JournalContext);
  const journalEntry = entries.find(entry => entry._id === journalEntryId);

  const [currentEntry, setCurrentEntry] = useState(journalEntry);

  const backClickHandler = () => {
    navigate(-1);
  };

  const editEntryHandler = (e) => {
    e.preventDefault();
    journalService.edit(journalEntryId, currentEntry)
      .then(result => {
        setCurrentEntry(result);
        console.log(result);
      })
      navigate(-1)
  };

  const onChange = (e) => {
    setCurrentEntry((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={editEntryHandler}
      id="register"
      className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
    >
      <div className="flex flex-col gap-y-5 ">
        <h2 className="text-center">Edit</h2>
        <div className="flex gap-x-3 justify-between">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Fun"
            className="border-2"
            onChange={onChange}
            value={currentEntry.category}
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
            value={currentEntry.title}

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
            value={currentEntry.journalEntry}

          ></textarea>
        </div>
        <div className="flex gap-x-3">
          <button
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            // to={`/entry/${journalEntryId}`}
            onClick={backClickHandler}
          >
            Back
          </button>
          <input
            className="rounded-full border-2 border-green-800 bg-green-700 text-white px-8 py-2 cursor-pointer"
            type="submit"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
};

export default EditEntry;
