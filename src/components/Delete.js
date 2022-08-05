import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as journalService from "../services/journalService";

const Delete = () => {
  const navigate = useNavigate();
  const { journalEntryId } = useParams();

  const handleNoClick = () => {
    navigate(-1);
  };

  const handleYesClick = () => {
    journalService.del(journalEntryId).then(() => {
    });
    navigate(-2);
  };

  return (
    <div className="h-screen flex bg-gray-300">
      <div className="flex flex-col justify-center border-2 m-auto gap-y-3 p-6 bg-white">
        <p>Are you sure you want to delete this journal entry?</p>
        <div className="flex gap-x-3 justify-end">
          <button
            className="border-2 border-gray-300 px-3 py-1 rounded-lg bg-red-200 cursor-pointer"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="border-2 border-gray-300 px-3 py-1 rounded-lg bg-green-200 cursor-pointer"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
