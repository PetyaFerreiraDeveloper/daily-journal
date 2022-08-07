import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as journalService from "../../services/journalService";
import NoEntries from "../common/NoEntries";
import JournalEntry from "./JournalEntry";

const JournalList = () => {
  const [entries, setEntries] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    journalService.getAllByOwner(user._id).then((result) => {
      setEntries(result);
    });
  }, [user._id]);

  return (
    <section className="flex flex-col items-center gap-y-10 py-20">
      {entries.length > 0
        ? <h2 className="text-center">See all your journal entries in one place</h2>
        : <NoEntries />
      }
      
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <JournalEntry key={entry._id} journalEntry={entry} />
          ))
        ) : null}
      </div>
    </section>
  );
};

export default JournalList;
