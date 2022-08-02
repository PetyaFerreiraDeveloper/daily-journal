import React from 'react';

const CreateForm = () => {

    const submitHandler = () => {

    };

  return (
    <form
        onSubmit={submitHandler}
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
            />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="createdOn">Date:</label>
            <input className="border-2" type="text" name="createdOn" id="createdOn" />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="journalEntry">Todays Entry:</label>
            
            <textarea name="journalEntry" id="journalEntry" placeholder="Entry Title" className="border-2">

            </textarea>
          </div>
          <input className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer" type="submit" defaultValue="Create" />
          
        </div>
      </form>
  )
}

export default CreateForm