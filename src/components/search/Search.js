import React, { useState } from "react";

const Search = ({searchEntries}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onClearClick = (e) => {
    setSearch('');
    setFilter('all');
    searchEntries(search, filter);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    searchEntries(search, filter);
  };

  return (
    <form
      onSubmit={onSearchSubmit}
      className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-y-5 bg-gray-800 text-white  py-1 md:p-5"
    >
      <h2>Search Blog</h2>
      <div className="flex flex-col items-end gap-y-5 md:flex-row md:items-center">
        <input
          type="text"
          placeholder="Please write here"
          name="search"
          id="search"
          className="w-[300px] h-10 text-gray-800"
          onChange={onSearchChange}
          value={search}
        />
        <div className="flex md:pl-5 gap-x-3 ">
          {search.length > 0 && (
            <button className="py-3" onClick={onClearClick}>
              Clear
            </button>
          )}
          <button className="py-3">Search</button>
        </div>
      </div>
      <div className="flex gap-x-2 ">
        <select 
            onChange={onFilterChange}
            value={filter}
            name="filter" 
            id="filter" 
            className="w-[200px] text-gray-800"
        >
          <option value="all">Search All</option>
          <option value="_createdOn">Search by date</option>
          <option value="authorName">Search by author</option>
          <option value="title">Search by title</option>
        </select>
      </div>
    </form>
  );
};

export default Search;
