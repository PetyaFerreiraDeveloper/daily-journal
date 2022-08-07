import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as journalService from "./services/journalService";
import { AuthProvider } from "./contexts/AuthContext";
import { JournalContext } from "./contexts/JournalContext";

import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import About from "./components/About";
import MyJournal from "./components/myJournal/MyJournal";
import CreateEntry from "./components/create/CreateEntry";
import Details from "./components/Details";
import Delete from "./components/Delete";
import EditEntry from "./components/edit/EditEntry";
import NotFound from "./components/NotFound";
import Blog from "./components/blog/Blog";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entryData) => {
    setEntries((state) => [...state, entryData]);
  };

  useEffect(() => {
    journalService.getAll().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <AuthProvider>
      <JournalContext.Provider value={{ entries, addEntry }}>
        <Layout>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login /> } />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout /> } />
              <Route path="/about"element={<About />}/>

              <Route path="/my-journal" element={ <MyJournal /> }/>
              <Route path="/entry/:journalEntryId/edit" element={<EditEntry /> }/>

              <Route path="/blog" element={<Blog />}/>
              <Route path="/entry/:journalEntryId" element={ <Details />}/>

              <Route path="/create" element={<CreateEntry />}/>

              <Route path="/delete/:journalEntryId" element={<Delete />}/>
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </div>
        </Layout>
      </JournalContext.Provider>
    </AuthProvider>
  );
}

export default App;
