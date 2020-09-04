import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { StyledContainer } from './FormStyles';

import img from '../../../images/other/contakt-img.jpg';

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

  const handleChangeName = (e) => {
    setName(e.target.value);

    if (
      !e.target.value.match(/^[a-z A-Zążźćęółś]+$/) &&
      e.target.value.length > 0
    ) {
      setNameError('To pole może zawierać tylko litery i spacje');
    } else {
      setNameError('');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);

    if (!e.target.value) {
      setEmailError('Wypełnij proszę to pole');
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
      e.target.value.length > 0
    ) {
      setEmailError('Wpisz proszę poprawny adres email');
    } else {
      setEmailError('');
    }
  };

  const handleChangePhoneNumber = (e) => {
    if (e.target.value.match(/[0-9]+/g) === null) {
      setPhoneNumber('');
    } else {
      setPhoneNumber(e.target.value.match(/[0-9]+/g));
    }

    if (!e.target.value) {
      setPhoneNumberError('Wypełnij proszę to pole');
    } else if (e.target.value.length !== 9) {
      setPhoneNumberError('Wpisz proszę poprawny numer telefonu');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);

    if (!e.target.value) {
      setMessageError('Wypełnij proszę to pole');
    } else {
      setMessageError('');
    }
  };

  const handleClickRodo = (e) => {
    if (!e.target.checked) {
      setRodoError('Zaakceptuj proszę naszą politykę prywatności');
    } else {
      setRodoError('');
    }
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
        <img src={img} alt='słonecznik' />

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
            <p className='errorTxt'>{nameError}</p>
          </p>

          <p>
            <label>Adres email (wymagane)</label>
            <input
              placeholder='Podaj adres email'
              onChange={(e) => handleChangeEmail(e)}
              value={email}
            />
            <p className='errorTxt'>{emailError}</p>
          </p>

          <p>
            <label>Numer telefonu (wymagane)</label>
            <input
              placeholder='Podaj numer telefonu'
              onChange={(e) => handleChangePhoneNumber(e)}
              value={phoneNumber}
            />
            <p className='errorTxt'>{phoneNumberError}</p>
          </p>

          <p>
            <label>Wiadomość (wymagane)</label>
            <textarea
              placeholder='Wpisz treść wiadomości'
              onChange={(e) => handleChangeMessage(e)}
              value={message}
            />
            <p className='errorTxt'>{messageError}</p>
          </p>

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
                (wymagane) Wyrażam zgodę na przetwarzanie moich danych osobowych
                zgodnie z ustawą o ochronie danych osobowych w związku z
                wysłaniem zapytania przez formularz kontaktowy. Podanie danych
                jest niezbędne do przetworzenia zapytania. Zostałem
                poinformowany o prawie dostępu do swoich danych, możliwości ich
                edytowania oraz żądania zaprzestania ich przetwarzania.
                Administratorem danych osobowych jest właściciel serwisu
                CzarOgród.pl.
              </span>
              <br />
              <br />
              <span>Zapoznaj się z naszą </span>
              <Link className='polityka' to='/polityka_prywatności'>
                Polityką prywatności
              </Link>
            </label>
            <p className='errorTxt'>{rodoError}</p>
          </p>

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
