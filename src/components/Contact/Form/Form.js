import React, { useState, useRef } from 'react';
import Link from 'next/link';

import axios from 'axios';

import { StyledContainer } from './FormStyles';

import {
  handleNameError,
  handleEmailError,
  handlePhoneNumberError,
  handleMessageError,
  handleRodoError,
} from '../../../utilities/contactForm';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const rodo = useRef();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [rodoError, setRodoError] = useState('');

  const [send, setSend] = useState(false);

  const handleChangeName = ({ target }) => {
    setName(target.value);
    setNameError(handleNameError(target.value));
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
    setEmailError(handleEmailError(target.value));
  };

  const handleChangePhoneNumber = ({ target }) => {
    if (target.value.match(/[0-9+ ]+/g) === null) {
      setPhoneNumber('');
    } else {
      setPhoneNumber(target.value.match(/[0-9+ ]+/g));
    }

    setPhoneNumberError(handlePhoneNumberError(target.value));
  };

  const handleChangeMessage = ({ target }) => {
    setMessage(target.value);
    setMessageError(handleMessageError(target.value));
  };

  const handleClickRodo = ({ target }) => {
    setRodoError(handleRodoError(target.checked));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Uzupełnij proszę to pole');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Uzupełnij proszę to pole');
    }

    if (!message) {
      setMessageError('Uzupełnij proszę to pole');
    }

    if (!rodo.current.checked) {
      setRodoError('Zaakceptuj proszę naszą politykę prywatności');
    }

    if (
      email &&
      phoneNumber &&
      message &&
      rodo &&
      nameError === '' &&
      emailError === '' &&
      phoneNumberError === '' &&
      messageError === '' &&
      rodoError === ''
    ) {
      axios
        .post('https://czarogrod-backend-mail.herokuapp.com/sendmail', {
          name,
          email,
          phoneNumber,
          message,
        })
        .then((res) => {
          if (res.data.sent) {
            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            rodo.current.checked = false;
            setSend('success');
          } else {
            setSend('error');
          }
        })
        .catch((error) => console.log(error));

      setSend('pending');
    } else {
      setSend('');
    }
  };

  return (
    <>
      <StyledContainer>
        <img src='/images/other/contakt-img.jpg' alt='słonecznik' />

        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Kontakt</h1>

          <p>
            <label>Imię</label>
            <input
              type='text'
              placeholder='Podaj imię'
              onChange={(e) => handleChangeName(e)}
              value={name}
            />
          </p>
          <p className='errorTxt'>{`${nameError}`}</p>

          <p>
            <label>Adres email (wymagane)</label>
            <input
              placeholder='Podaj adres email'
              onChange={(e) => handleChangeEmail(e)}
              value={email}
            />
          </p>
          <p className='errorTxt'>{emailError}</p>

          <p>
            <label>Numer telefonu (wymagane)</label>
            <input
              placeholder='Podaj numer telefonu'
              onChange={(e) => handleChangePhoneNumber(e)}
              value={phoneNumber}
            />
          </p>
          <p className='errorTxt'>{phoneNumberError}</p>

          <p>
            <label>Wiadomość (wymagane)</label>
            <textarea
              placeholder='Wpisz treść wiadomości'
              onChange={(e) => handleChangeMessage(e)}
              value={message}
            />
          </p>
          <p className='errorTxt'>{messageError}</p>

          <p>
            <label className='rodo'>
              <input
                type='checkbox'
                name='acceptance-rodo'
                value={rodo}
                onClick={(e) => handleClickRodo(e)}
                ref={rodo}
                className='rodo-checkbox'
              />
              <span>
                (wymagane) Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
                ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez
                formularz kontaktowy. Podanie danych jest niezbędne do przetworzenia
                zapytania. Zostałem poinformowany o prawie dostępu do swoich danych,
                możliwości ich edytowania oraz żądania zaprzestania ich przetwarzania.
                Administratorem danych osobowych jest właściciel serwisu CzarOgród.pl.
              </span>
              <br />
              <br />
              <span>Zapoznaj się z naszą </span>
              <Link className='polityka' href='/polityka_prywatnosci'>
                Polityką prywatności
              </Link>
            </label>
          </p>
          <p className='errorTxt'>{rodoError}</p>

          <p>
            <input type='submit' className='submit' value='Wyślij' />
          </p>

          <div className='send-info'>
            {!send
              ? ''
              : send === 'error'
              ? 'Coś poszło nie tak. Sprawdź wszystkie pola i spróbuj jescze raz'
              : send === 'success'
              ? 'Twoja wiadomość została wysłana pomyślnie'
              : send === 'pending'
              ? 'Wysyłanie...'
              : ''}
          </div>
        </form>
      </StyledContainer>
    </>
  );
};

export default Form;
