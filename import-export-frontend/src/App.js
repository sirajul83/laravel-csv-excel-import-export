import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Import from "./components/Import";
import Layout from "./components/Layouts/Layout";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Registration /> } />
              <Route path="/home" element={<Registration /> } />
              <Route path="/registration" element={<Registration /> } />
              <Route path="/import" element={<Import /> } />
              <Route path="/login" element={<Login /> } />
          </Routes>
        </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
