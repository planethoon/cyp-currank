import Widget from "../components/Widget";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

export default function App() {
  return (
    <div className="App">
      <div className="main--background">
        <div className="main--title">
          <Logo />
        </div>
        <div className="main--wrapper">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

App.checkSubLayout = function checkSubLayout(page) {
  return (
    <Layout>
      <Footer>{page}</Footer>
    </Layout>
  );
};
