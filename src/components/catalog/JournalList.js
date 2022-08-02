import React from "react";

import JournalEntry from "./JournalEntry";

const JournalList = (props) => {
  const {entries} = props;

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
