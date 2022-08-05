import React from "react";

import { dateFormatter } from "../../utils/dateFormatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Button from "../common/Button";

const JournalEntry = (props) => {
  const { journalEntry } = props;

  let author = journalEntry.authorName || "anonymous";
  let blogBackground = "";
  if (journalEntry.blog) {
    blogBackground = "bg-gray-500";
  }

  return (
    <article
      className={`flex flex-col p-4 w-[350px] border-2 border-gray-600 rounded-2xl shadow-[0_2px_4px_1px_rgba(190,193,202,0.5)] drop-shadow-xl text-white ${blogBackground}`}
    >
        <p className="self-end">{dateFormatter(journalEntry._createdOn)}</p>
      <div>
        <p className="italic">{capitalizeFirstLetter(journalEntry.category)}</p>
        <h3 className="text-ellipsis overflow-hidden"> {capitalizeFirstLetter(journalEntry.title)}</h3>
        {journalEntry.blog ? (
          <p>{`author: ${capitalizeFirstLetter(author)}`}</p>
        ) : null}
      </div>

      <Button
        nav={`/entry/${journalEntry._id}`}
        label={"Details"}
        className={"bg-orange-400 border-orange-500 self-end"}
      />
    </article>
  );
};

export default JournalEntry;
