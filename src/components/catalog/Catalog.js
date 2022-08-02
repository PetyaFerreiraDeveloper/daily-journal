import React from "react";
import { useState, useEffect } from "react";

import * as gameService from "../../services/journalService";

import JournalEntry from "./JournalEntry";

const Catalog = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <section>
      <h2>All your journal entries are here</h2>
      {/* display div with each entry */}
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

export default Catalog;
