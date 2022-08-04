//TODO add to Favorites functionality
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEntry = () => {
  const [newEntry, setNewEntry] = useState({
    title: "",
    category: "",
    journalEntry: "",
  });

  const navigate = useNavigate();

  const { entryId } = useParams();

  const backClickHandler = () => {
    navigate(-1);
  };

  const createEntryHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(newEntry);
  };

  const onChange = (e) => {
    setNewEntry((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={createEntryHandler}
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
          <button
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            onClick={backClickHandler}
          >
            Back
          </button>
          <input
            className="rounded-full border-2 bg-green-700 text-white px-8 py-2 cursor-pointer"
            type="submit"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
};

export default EditEntry;
