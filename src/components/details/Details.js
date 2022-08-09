import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { JournalContext } from "../../contexts/JournalContext";
import { AuthContext } from "../../contexts/AuthContext";

import * as journalService from "../../services/journalService";

import Button from "../common/Button";
import DetailsEntry from "./DetailsEntry";

const Details = () => {
  const { entries } = useContext(JournalContext);
  const { user } = useContext(AuthContext);
  const { journalEntryId } = useParams();
  const navigate = useNavigate();

  const journalEntry = entries.find((entry) => entry._id === journalEntryId);
  const [entry, setEntry] = useState(journalEntry);

  useEffect(() => {
    journalService.getOne(journalEntryId).then((entryData) => {
      setEntry(entryData);
    });
  }, [journalEntryId]);

  if (entries.length === 0) {
    return;
  }

  const backClickHandler = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div>
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>
      <section className="border-2 rounded-2xl flex flex-col gap-y-3 p-5 bg-white">
      <h1 className="text-center">Journal Entry Details</h1>

        <DetailsEntry journalEntry={entry}/>

        <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:items-center md:px-5 gap-x-1">
          <button
            className="rounded-full border-2 border-darker-green bg-dark-green px-8 py-2 self-start text-white"
            onClick={backClickHandler}
          >
            Back
          </button>
          {user._id === journalEntry._ownerId ? (
            <div className="flex self-end gap-x-1 md:gap-x-3">
              <Button
                nav={`/entry/${journalEntry._id}/edit`}
                label={"Edit"}
                className="bg-orange-400 border-orange-500"
              />
              <Button
                nav={`/delete/${journalEntry._id}`}
                label={"Delete"}
                className="bg-orange-400 border-orange-500"
              />
            </div>
          ) : null}
        </div>
      </section>

    </div>
  );
};

export default Details;
