import React from "react";

import { dateFormatter } from "../../utils/dateFormatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Button from "../common/Button";
import BlogLabel from "../blog/BlogLabel";

const JournalEntry = (props) => {
  const { journalEntry } = props;

  let author = journalEntry.authorName || "anonymous";
  let listingBackground = "";
  if (journalEntry.blog) {
    listingBackground = "bg-gray-500";
  } else {
    listingBackground = 'bg-heroGreen'
  }

  return (
    <article
      className={`static flex flex-col justify-center gap-y-4 p-4 w-[350px] h-[200px] border-2 border-gray-600 rounded-2xl shadow-[0_2px_4px_1px_rgba(190,193,202,0.5)] drop-shadow-xl text-white ${listingBackground}`}
    >
      {journalEntry.blog ? <BlogLabel />: null}
      
        <div className="flex justify-between">
          <p className="w-32">{dateFormatter(journalEntry._createdOn)}</p>
          {journalEntry.blog ? <p className="truncate w-48">{`author: ${capitalizeFirstLetter(author)}`}</p> : null}
        </div>
        <h3 className="text-center text-ellipsis overflow-hidden">
          {capitalizeFirstLetter(journalEntry.title)}
        </h3>

      <Button
        nav={`/entry/${journalEntry._id}`}
        label={"Details"}
        className={"bg-orange-400 border-orange-500 self-end -mb-5"}
      />
    </article>
  );
};

export default JournalEntry;
