import React from 'react';
import { useNavigate } from 'react-router-dom';

const Details = (props) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(-1);
    };

  return (
    <article className="border-2">
        {/* <p>{journalEntry.category}</p>
        <p>{journalEntry.title}</p>
        <p>{journalEntry.createdOn}</p>
        <p>{journalEntry.journalEntry}</p> */}
        <button 
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            onClick={clickHandler}
        >
            Back
        </button>
        
    </article>
  )
}

export default Details