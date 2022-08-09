import React, { useState, useEffect } from "react";

import * as journalService from "../../services/journalService";

import JournalEntry from "../myJournal/JournalEntry";
import NoEntries from "../common/NoEntries";

const BlogList = ({blogSection}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    journalService.getAllShared().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <section ref={blogSection} className="flex flex-col items-center gap-y-10 py-20">
      {entries.length > 0
        ? <h2>Latest blog entries</h2>
        : <NoEntries />
      }
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <JournalEntry key={entry._id} journalEntry={entry} />
          ))
        ) : (
          <p>There are no blog entries yet</p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
