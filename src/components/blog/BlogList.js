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
      <h2>your blog entire</h2>
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

export default BlogList;