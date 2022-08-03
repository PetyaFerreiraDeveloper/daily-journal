import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import uniqid from 'uniqid';

import * as journalService from './services/journalService';

import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import About from "./components/About";
import MyJournal from "./components/catalog/MyJournal";
import CreateEntry from "./components/create/CreateEntry";
import Details from "./components/Details";
import EditEntry from "./components/edit/EditEntry";
import NotFound from "./components/NotFound";

function App() {

  const [entries, setEntries] = useState([]);

  const addEntryHandler = (entryData) => {
    setEntries(state => [
      ...state,
      {
        ...entryData,
        _id: uniqid()
      }
    ])
  }

  useEffect(() => {
    journalService.getAll().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<Layout> <About /> </Layout>}  />
        <Route path="/my-journal" element={<Layout> <MyJournal entries={entries}/> </Layout>}  />
        
        <Route path="/my-journal/:journalEntryId" element={<Layout> <Details entries={entries}/> </Layout>}  />
        <Route path="/my-journal/:journalEntryId/edit" element={<Layout> <EditEntry /> </Layout>}  />

        <Route path="/create" element={<Layout> <CreateEntry addEntryHandler={addEntryHandler} /> </Layout>}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
