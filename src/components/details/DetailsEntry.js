import React from "react";

import { dateFormatter } from "../../utils/dateFormatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import BlogLabel from "../blog/BlogLabel";

const DetailsEntry = ({ journalEntry }) => {
  let author = journalEntry.authorName || "anonymous";
  let listingBackground = "";
  let textColor = "";
  if (journalEntry.blog) {
    listingBackground = "bg-gray-500";
    textColor = "text-white";
  } else {
    listingBackground = "bg-white";
    textColor = "text-gray-800";
  }

  return (
    <article
      className={`static flex flex-col justify-center gap-y-4 p-4 w-full border-2 border-gray-600 rounded-2xl shadow-[0_2px_4px_1px_rgba(190,193,202,0.5)] drop-shadow-xl text-white ${listingBackground} ${textColor}`}
    >
      {journalEntry.blog ? <BlogLabel label={'blog'}/>: <BlogLabel label={'journal'}/>}

      <p className="break-words">{`Category: ${journalEntry.category}`}</p>
      <h3 className="break-words">{`Title: ${journalEntry.title}`}</h3>
      <p>{`Created on: ${dateFormatter(journalEntry._createdOn)}`}</p>
      {journalEntry.blog ? <p className="truncate w-48">{`Author: ${capitalizeFirstLetter(author)}`}</p> : null}
      {journalEntry._updatedOn ? (
        <p>{`Updated on: ${dateFormatter(journalEntry._updatedOn)}`}</p>
      ) : null}

      <p className="break-words">{`Journal Entry: ${journalEntry.journalEntry}`}</p>
    </article>
  );
};

export default DetailsEntry;
