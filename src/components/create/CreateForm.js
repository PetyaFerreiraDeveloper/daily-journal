//TODO add to Favorites functionality
import React, { useState } from 'react';

const CreateForm = () => {
    const [newEntry, setNewEntry] = useState({
      entryTitle: '',
      category: '',
      createdOn: '',
      journalEntry: ''
    })

    const createEntryHandler = (e) => {
      e.preventDefault();
      console.log('submit');
      console.log(newEntry);
    };

    const onChange = (e) => {
      setNewEntry(state => ({
        ...state,
        [e.target.name]: e.target.value
      }))
    }

  return (
    <form
        onSubmit={createEntryHandler}
        id="register"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
      >
        <div className="flex flex-col gap-y-5 ">
          <h2 className="text-center">Create</h2>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="entryTitle">Entry Title</label>
            <input
              type="text"
              id="entryTitle"
              name="entryTitle"
              placeholder="Entry Title"
              className="border-2"
              onChange={onChange}
              value={newEntry.entryTitle}
            />
          </div>
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
            <label htmlFor="createdOn">Date:</label>
            <input 
              className="border-2" 
              type="text" 
              name="createdOn" 
              id="createdOn" 
              onChange={onChange}
              value={newEntry.createdOn}
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
            >

            </textarea>
          </div>
          <input className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer" type="submit" value="Create" />
          <input type="text" />
          
        </div>
      </form>
  )
}

export default CreateForm