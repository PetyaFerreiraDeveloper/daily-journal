import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { JournalContext } from '../contexts/JournalContext';

import * as journalService from '../services/journalService';
import { dateFormatter } from '../utils/dateFormatter';


const Details = () => {
    const { entries } = useContext(JournalContext);
    const { journalEntryId } = useParams();
    const journalEntry = entries.find(entry => entry._id === journalEntryId);
    const [entry, setEntry] = useState(journalEntry)
    const navigate = useNavigate();

    useEffect(() => {
        journalService.getOne(journalEntryId)
            .then(entryData => {
                setEntry(entryData);
            })
    }, [journalEntryId])
    

    const backClickHandler = () => {
        navigate('/my-journal');
    };

  return (
    <section className="border-2">
        <h2>Journal Entry Details</h2>
        <p>{`Category: ${entry.category}`}</p>
        <p>{`Title: ${entry.title}`}</p>
        <p>{`Created on: ${dateFormatter(entry._createdOn)}`}</p>
        {entry._editedOn
            ? <p>{`Edited on: ${dateFormatter(entry._editedOn)}`}</p>
            : null
        }
        
        <p>{`Journal Entry: ${entry.journalEntry}`}</p>
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