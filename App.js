import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import "./index.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
