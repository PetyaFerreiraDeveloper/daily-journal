import React from "react";
import { Link } from "react-router-dom";

import { dateFormatter } from "../../utils/dateFormatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const JournalEntry = (props) => {
  const { journalEntry } = props;

  let author = journalEntry.authorName || ('anonymous');
  let blogBackground = '';
  if (journalEntry.blog) {
    blogBackground = 'bg-blue-400'
  };

  return (
    <article className={`border-2 flex flex-col gap-y-3 items-center ${blogBackground}`}>
      <p>{journalEntry.category}</p>
      <p>{journalEntry.title}</p>
      <p>{dateFormatter(journalEntry._createdOn)}</p>
      {(journalEntry.blog)
        ? <p>{`Author: ${capitalizeFirstLetter(author)}`}</p>
        : null
      }
      <Link
        to={`/entry/${journalEntry._id}`}
        className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
      >
        Details
      </Link>
    </article>
  );
};

export default JournalEntry;
