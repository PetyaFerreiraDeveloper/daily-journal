import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import About from "./components/About";
import MyJournal from "./components/catalog/MyJournal";
import CreateEntry from "./components/create/CreateEntry";
import CreateForm from "./components/create/CreateForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<Layout> <About /> </Layout>}  />
        <Route path="/my-journal" element={<Layout> <MyJournal /> </Layout>}  />
        <Route path="/create" element={<Layout> <CreateEntry /> </Layout>}  />
        <Route path="/create-form" element={<CreateForm />}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
