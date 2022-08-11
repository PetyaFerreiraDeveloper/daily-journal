import React, { useState, useEffect, useContext, useRef } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as journalService from "../../services/journalService";

import BlogList from "./BlogList";
import Hero from "../Hero";
import hero from "../../assets/hero.jpg";
import Search from "../search/Search";

const Blog = () => {
  const { user } = useContext(AuthContext);
  const blogSection = useRef(null);
  const [entries, setEntries] = useState([]);
  const [results, setResults] = useState(false);
  let filtered = [];
  
  useEffect(() => {
    journalService.getAllShared().then((result) => {
      setEntries(result);
    });
    
  }, []);

  const searchEntries = (text, filterValue) => {

    for (let i = 0; i < entries.length; i++) {
      if (entries[i][filterValue] !== undefined) {
        if (entries[i][filterValue].includes(text)) {

          filtered.push(entries[i]);
          setResults(false)
        }
      } else {
        setResults(true)
      }
    }
    setEntries(filtered);
  };

  return (
    <div>
      <Hero
        articleTitle={"Read all blog posts below"}
        description={
          "Every year, tens of thousands of people get into a famous college of their choice. It's not unlikely that someone will get in, it's simply not certain that you will. "
        }
        label={"Write a blog post"}
        navigateTo={user.email ? "/create" : "/register"}
        imageUrl={hero}
        className={"bg-heroGreen text-white"}
        imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
        first={blogSection}
      />
      <section>
        <Search entries={entries} searchEntries={searchEntries} />
        {results ? <p>No results found</p> 
        : <BlogList blogSection={blogSection} entries={entries}/>
        
        }

      </section>
    </div>
  );
};

export default Blog;
