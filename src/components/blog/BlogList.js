import React, { useState, useEffect } from "react";

import * as journalService from '../../services/journalService';
import JournalEntry from "../myJournal/JournalEntry";

const BlogList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    journalService.getAllShared()
      .then((result) => {
        setEntries(result);
      });
  }, []);

  return (
    <section>
      <h2>Latest blog entries</h2>
      {entries.length > 0 ? (
        entries.map((entry) => (
          <JournalEntry key={entry._id} journalEntry={entry} />
        ))
      ) : (
        <p>There are no blog entries yet</p>
      )}
    </section>
  );
};

export default BlogList;