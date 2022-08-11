import React from "react";

import Button from "./Button";

const NoEntries = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <h2 className="text-center">
        You don't have any journal entries yet!
      </h2>
      <Button 
        nav={"/create"} 
        label={"Just Write Something"} 
        className={'bg-dark-green border-darker-green'}
        />
    </div>
  );
};

export default NoEntries;
