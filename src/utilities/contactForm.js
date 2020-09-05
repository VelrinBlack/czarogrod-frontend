export const handleNameError = (name) => {
  if (!name) {
    return 'Wypełnij proszę to pole';
  } else if (!name.match(/^[a-z A-Zążźćęółś]+$/) && name.length > 0) {
    return 'To pole może zawierać tylko litery i spacje';
  } else {
    return '';
  }
};

export const handleEmailError = (email) => {
  if (!email) {
    return 'Wypełnij proszę to pole';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 0) {
    return 'Wpisz proszę poprawny adres email';
  } else {
    return '';
  }
};

export const handlePhoneNumberError = (phoneNumber) => {
  if (!phoneNumber) {
    return 'Wypełnij proszę to pole';
  } else {
    return '';
  }
};

export const handleMessageError = (message) => {
  if (!message) {
    return 'Wypełnij proszę to pole';
  } else {
    return '';
  }
};

export const handleRodoError = (rodo) => {
  if (!rodo) {
    return 'Zaakceptuj proszę naszą politykę prywatności';
  } else {
    return '';
  }
};
