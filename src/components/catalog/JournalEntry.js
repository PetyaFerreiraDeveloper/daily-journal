import React from 'react';

const JournalEntry = (props) => {
    const { journalEntry } = props
  return (
    <article className="border-2">
        <p>{journalEntry.category}</p>
        <p>{journalEntry.title}</p>
        <p>{journalEntry.createdOn}</p>
        <p>{journalEntry.journalEntry}</p>
    </article>
  )
}

export default JournalEntry;