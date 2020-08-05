import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import img from '../../images/kontakt-img.jpg';

const StyledContainer = styled.div`
    width: 100%;

    margin-top: 250px;

    .main {
        width: 100%;
        height: 1400px;

        display: flex;
        justify-content: space-around;

        margin-top: 100px;
        padding-top: 70px;

        .img {
            width: 30%;
            height: 900px;

            margin-top: 100px;

            background-image: url(${img});
            background-size: 100%;
            background-repeat: no-repeat;
        }

        form {
            width: 50%;
            height: 900px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .success {
                width: 100%;

                display: block;

                margin-top: 30px;
                padding: 20px 0;

                border: 3px solid #98dad9;

                text-align: center;
            }

            h1 {
                width: 100%;

                margin: 0 0 50px 0;

                font-size: 50px;
                text-align: center;
            }

            p {
                position: relative;

                width: 100%;

                .errorTxt {
                    font-size: 14px;
                    color: red;
                }

                label {
                    width: 100%;
                    display: block;
                    margin-bottom: 20px;

                    text-align: center;
                }

                .rodo {
                    font-size: 14px;

                    .rodo-checkbox {
                        width: 14px;
                        height: 14px;

                        margin-right: 20px;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                input,
                textarea {
                    box-sizing: border-box;

                    width: 100%;

                    margin: 0;
                    padding-left: 20px;

                    background-color: #fff;
                    border-radius: 3px;
                    border: 2px solid #f2f2f2;

                    font-size: 19px;
                }
                input {
                    height: 70px;
                }
                textarea {
                    box-sizing: border-box;

                    height: 200px;

                    padding: 20px 0 0 20px;

                    font-family: 'Poppins', sans-serif;
                }
            }
            .submit {
                position: relative;

                width: 100%;
                height: 60px;

                margin-top: 60px;
                padding: 0;

                background-color: #399ca1;
                border: none;
                border-radius: 4px;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

                font-size: 16px;
                font-weight: 700;
                letter-spacing: 1.5px;
                color: #fff;

                cursor: pointer;
                transition: all 0.2s;
                z-index: 0;

                &:hover {
                    transform: scale(0.97);
                }

                &:focus {
                    outline: none;
                }
            }
        }
    }

    @media (max-width: 1536px) {
        .main {
            .img {
                height: 700px;
            }
            form {
                height: 700px;

                p {
                    label {
                        font-size: 15px;
                    }
                    .errorTxt {
                        font-size: 13px;
                    }
                    .rodo {
                        font-size: 13px;
                    }
                    input,
                    textarea {
                        font-size: 15px;
                    }
                    input {
                        height: 60px;
                    }
                    textarea {
                        height: 150px;

                        padding: 15px 0 0 15px;
                    }
                }
                .submit {
                    height: 50px;

                    margin-top: 0px;
                    padding: 0;

                    font-size: 15px;
                    letter-spacing: 1.3px;
                }
            }
        }
    }
    @media (max-width: 1440px) {
        .main {
            .img {
                height: 600px;
            }
            form {
                height: 600px;

                p {
                    label {
                        font-size: 13px;
                    }
                    .errorTxt {
                        font-size: 11px;
                    }
                    .rodo {
                        font-size: 11px;
                    }
                    input,
                    textarea {
                        font-size: 13px;
                    }
                    input {
                        height: 50px;
                    }
                }
                .submit {
                    height: 40px;

                    font-size: 13px;
                }
            }
        }
    }
    @media (max-width: 1024px) {
        .main {
            .img {
                width: 40%;
            }
            form {
                width: 40%;

                p {
                    label {
                        font-size: 11px;
                    }
                    .errorTxt {
                        font-size: 9px;
                    }
                    .rodo {
                        font-size: 9px;

                        .rodo-checkbox {
                            width: 10px;
                            height: 10px;
                        }
                    }
                    input,
                    textarea {
                        font-size: 11px;
                    }
                    input {
                        height: 40px;
                    }
                    textarea {
                        height: 120px;
                    }
                }
            }
        }
    }

    @media (max-width: 962px) {
        width: 100%;

        padding-top: 100px;

        .main {
            flex-direction: column;
            justify-content: start;
            align-items: center;

            .img {
                display: none;
            }
            form {
                width: 80%;

                p {
                    label {
                        font-size: 13px;
                    }
                    .errorTxt {
                        font-size: 11px;
                    }
                    .rodo {
                        font-size: 8px;

                        .rodo-checkbox {
                            width: 12px;
                            height: 12px;
                        }
                    }
                    input,
                    textarea {
                        font-size: 13px;
                    }
                    input {
                        height: 50px;
                    }
                    textarea {
                        height: 130px;
                    }
                }
            }
        }
    }
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rodo, setRodo] = useState('');
    const [send, setSend] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [rodoError, setRodoError] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);

        if (!e.target.value.match(/^[a-zA-Z]+$/) && e.target.value.length > 0) {
            setNameError('To pole może zawierać tylko małe i duże litery');
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
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);

        if (!e.target.value) {
            setMessageError('Wypełnij proszę to pole');
        } else {
            setMessageError('');
        }
    };
    const handleClickRodo = (e) => {
        setRodo(e.target.checked);

        if (!e.target.checked) {
            setRodoError('Zaakceptuj proszę naszą politykę prywatności');
            console.log(e.target.checked);
        } else {
            setRodoError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError('Uzupełnij proszę to pole');
        }
        if (!message) {
            setMessageError('Uzupełnij proszę to pole');
        }
        if (!rodo) {
            setRodoError('Zaakceptuj proszę naszą politykę prywatności');
        }

        if (
            email &&
            message &&
            rodo &&
            !nameError &&
            !emailError &&
            !messageError &&
            !rodoError
        ) {
            axios
                .post('http://localhost:5000/api/sendmail', {
                    name,
                    email,
                    message,
                })
                .then((res) => {
                    if (res.data.sent) {
                        setName('');
                        setEmail('');
                        setMessage('');
                        setSend('success');
                    } else {
                        setSend(
                            'Coś poszło nie tak. Sprawdź uzupełnioną treść i spróbuj jescze raz.'
                        );
                    }
                });

            setSend('Wysyłanie...');
        } else {
            setSend('');
        }
    };

    return (
        <>
            <StyledContainer>
                <div className="main">
                    <div className="img"></div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h1>Kontakt</h1>
                        <p>
                            <label>Imię i nazwisko</label>
                            <input
                                type="text"
                                placeholder="Podaj imię i nazwisko"
                                onChange={(e) => handleChangeName(e)}
                                value={name}
                            />
                            <p className="errorTxt">{nameError}</p>
                        </p>
                        <p>
                            <label>Adres email (wymagane)</label>
                            <input
                                placeholder="Podaj adres email"
                                onChange={(e) => handleChangeEmail(e)}
                                value={email}
                            />
                            <p className="errorTxt">{emailError}</p>
                        </p>
                        <p>
                            <label>Wiadomość (wymagane)</label>
                            <textarea
                                placeholder="Wpisz treść wiadomości"
                                onChange={(e) => handleChangeMessage(e)}
                                value={message}
                            />
                            <p className="errorTxt">{messageError}</p>
                        </p>
                        <p>
                            <label className="rodo">
                                <input
                                    type="checkbox"
                                    name="acceptance-rodo"
                                    value={rodo}
                                    onClick={(e) => handleClickRodo(e)}
                                    className="rodo-checkbox"
                                />
                                <span>
                                    <span
                                        style={{
                                            fontWeight: '700',
                                        }}
                                    >
                                        (wymagane)
                                    </span>{' '}
                                    Wyrażam zgodę na przetwarzanie moich
                                    danychosobowych zgodnie z ustawą o ochronie
                                    danych osobowych w związku z wysłaniem
                                    zapytania przez formularz kontaktowy.
                                    Podanie danych jest niezbędne do
                                    przetworzenia zapytania. Zostałem
                                    poinformowany o prawie dostępu do swoich
                                    danych, możliwości ich edytowania oraz
                                    żądania zaprzestania ich przetwarzania.
                                    Administratorem danych osobowych jest
                                    właściciel serwisu CzarOgród.pl.
                                </span>
                            </label>
                            <p className="errorTxt">{rodoError}</p>
                        </p>
                        <p>
                            <input
                                type="submit"
                                className="submit"
                                value="Wyślij"
                            />
                        </p>
                        <div className={send}>
                            {!send
                                ? ''
                                : send === 'error'
                                ? 'Coś poszło nie tak. Sprawdź wszystkie pola i spróbuj jescze raz'
                                : send === 'success'
                                ? 'Twoja wiadomość została wysłana pomyślnie'
                                : ''}
                        </div>
                    </form>
                </div>
            </StyledContainer>
        </>
    );
};

export default Form;
