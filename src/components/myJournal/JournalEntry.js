import React from "react";
import { Link } from "react-router-dom";

import { dateFormatter } from "../../utils/dateFormatter";

const JournalEntry = (props) => {
  const { journalEntry } = props;

  return (
    <article className="border-2 flex flex-col gap-y-3 items-center">
      <p>{journalEntry.category}</p>
      <p>{journalEntry.title}</p>
      <p>{dateFormatter(journalEntry._createdOn)}</p>
      <Link
        to={`/my-journal/${journalEntry._id}`}
        className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
      >
        Details
      </Link>
    </article>
  );
};

export default JournalEntry;
