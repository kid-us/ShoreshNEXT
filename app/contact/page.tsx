import React from "react";
import Navbar from "../Navbar";
import Contact from "./Contact";

export const metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <>
      <Navbar bg />

      <Contact />
    </>
  );
};

export default ContactPage;
