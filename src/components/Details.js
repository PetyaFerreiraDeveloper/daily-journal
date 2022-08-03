import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { dateFormatter } from '../utils/dateFormatter';


const Details = (props) => {
    const {entries} = props;
    const { journalEntryId } = useParams();
    const navigate = useNavigate();

    const journalEntry = entries.find(entry => entry._id == journalEntryId);

    const clickHandler = () => {
        navigate(-1);
    };

  return (
    <section className="border-2">
        <h2>Journal Entry Details</h2>
        <p>{journalEntry.category}</p>
        <p>{journalEntry.title}</p>
        <p>{dateFormatter(journalEntry._createdOn)}</p>
        <p>{dateFormatter(journalEntry._editedOn)}</p>
        <p>{journalEntry.journalEntry}</p>
        <button 
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            onClick={clickHandler}
        >
            Back
        </button>
        
    </section>
  )
}

export default Details