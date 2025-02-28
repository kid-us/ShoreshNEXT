"use client";

import Container from "../components/Container";
import ContactForm from "./Form";
import useToggleStore from "../../store/store";
import Info from "./Info";

const Contact = () => {
  const { isToggled } = useToggleStore();

  return (
    <div className={`${isToggled ? "lg:pt-1 pt-10" : "lg:pt-20 pt-36"}`}>
      <Container>
        <p className={`text-sm uppercase text-gray-500`}>Contact us</p>
        <div className="grid lg:grid-cols-5 lg:mt-10 mt-6 gap-x-20">
          {/* Info */}
          <Info />
          {/* Form */}
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
