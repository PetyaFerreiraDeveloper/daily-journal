import React, { useState, useEffect } from "react";

import * as journalService from '../../services/journalService';
import JournalEntry from "./JournalEntry";

const JournalList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    journalService.getAll().then((result) => {
      setEntries(result);
    });
  }, []);


  return (
    <section>
      <h2>All your journal entries are here</h2>
      {entries.length > 0 ? (
        entries.map((entry) => (
          <JournalEntry key={entry._id} journalEntry={entry} />
        ))
      ) : (
        <p>You don't have any journal entries yet</p>
      )}
    </section>
  );
};

export default JournalList;
