import React, { useEffect } from "react";

import Form from "../../components/Contact/Form/Form";
import Address from "../../components/Contact/Address/Address";

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Form />
      <Address />
    </>
  );
};

export default Contact;
