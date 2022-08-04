import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { JournalContext } from '../contexts/JournalContext';

import { dateFormatter } from '../utils/dateFormatter';


const Details = () => {
    const { entries } = useContext(JournalContext)
    const { journalEntryId } = useParams();
    const navigate = useNavigate();
    
    const journalEntry = entries.find(entry => entry._id == journalEntryId);

    const backClickHandler = () => {
        navigate(-1);
    };

  return (
    <section className="border-2">
        <h2>Journal Entry Details</h2>
        <p>{`Category: ${journalEntry.category}`}</p>
        <p>{`Title: ${journalEntry.title}`}</p>
        <p>{`Created on: ${dateFormatter(journalEntry._createdOn)}`}</p>
        {journalEntry._editedOn
            ? <p>{`Edited on: ${dateFormatter(journalEntry._editedOn)}`}</p>
            : null
        }
        
        <p>{`Journal Entry: ${journalEntry.journalEntry}`}</p>
        <button 
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            onClick={backClickHandler}
        >
            Back
        </button>
        <Link 
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
            to={`/my-journal/${journalEntry._id}/edit`}
        >
            Edit
        </Link>
        
    </section>

  )
}

export default Details