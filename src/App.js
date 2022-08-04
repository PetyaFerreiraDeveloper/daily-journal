import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import useLocalStorage from './hooks/useLocalStorage';
import * as journalService from "./services/journalService";
import { AuthContext } from "./contexts/AuthContext";
import { JournalContext } from "./contexts/JournalContext";

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
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  const addEntry = (entryData) => {
    setEntries((state) => [
      ...state,
      entryData
    ]);
  };

  useEffect(() => {
    journalService.getAll().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
      <JournalContext.Provider value={{entries, addEntry}}>
      <div>
        <Routes>
          <Route path="/" element={
              <Layout>
                {" "}
                <Home />{" "}
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about"
            element={
              <Layout>
                {" "}
                <About />{" "}
              </Layout>
            }
          />
          <Route path="/my-journal"
            element={
              <Layout>
                {" "}
                <MyJournal />{" "}
              </Layout>
            }
          />

          <Route
            path="/my-journal/:journalEntryId"
            element={
              <Layout>
                {" "}
                <Details />{" "}
              </Layout>
            }
          />
          <Route
            path="/my-journal/:journalEntryId/edit"
            element={
              <Layout>
                {" "}
                <EditEntry />{" "}
              </Layout>
            }
          />

          <Route
            path="/create"
            element={
              <Layout>
                {" "}
                <CreateEntry />{" "}
              </Layout>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </JournalContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
