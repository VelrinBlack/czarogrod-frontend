import React, { useEffect } from 'react';

import Form from '../../components/Contact/Form/Form';

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <Form />;
};

export default Contact;
