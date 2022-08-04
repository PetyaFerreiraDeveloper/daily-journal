import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { JournalContext } from "../contexts/JournalContext";
import  {AuthContext} from "../contexts/AuthContext"

import * as journalService from "../services/journalService";
import { dateFormatter } from "../utils/dateFormatter";

const Details = () => {
  const { entries } = useContext(JournalContext);
  const { user } = useContext(AuthContext);
  const { journalEntryId } = useParams();

  const journalEntry = entries.find((entry) => entry._id === journalEntryId);
  const [entry, setEntry] = useState(journalEntry);

  useEffect(() => {
    journalService.getOne(journalEntryId).then((entryData) => {
      setEntry(entryData);
    });
  }, [journalEntryId]);

  if (entries.length === 0) {
    return
  }

  return (
    <section className="border-2 flex flex-col gap-y-3 p-5">
      <article className="flex flex-col gap-y-3">
        <h2>Journal Entry Details</h2>
        <p>{`Category: ${entry.category}`}</p>
        <p>{`Title: ${entry.title}`}</p>
        <p>{`Created on: ${dateFormatter(entry._createdOn)}`}</p>
        {entry._editedOn ? (
          <p>{`Edited on: ${dateFormatter(entry._editedOn)}`}</p>
        ) : null}

        <p>{`Journal Entry: ${entry.journalEntry}`}</p>
      </article>
      <div className="flex justify-between items-center px-5">
        <Link
          className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
          to={`/my-journal`}
        >
          Back
        </Link>
        {
          (user._id === journalEntry._ownerId)
            ? <div className="flex gap-x-3">
                <Link
                  className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
                  to={`/my-journal/${journalEntry._id}/edit`}
                >
                  Edit
                </Link>
                <Link
                  className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
                  to={`/my-journal/${journalEntry._id}/edit`}
                >
                  Delete
                </Link>
              </div>
            : null
        }
      </div>
    </section>
  );
};

export default Details;
