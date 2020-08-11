// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// external packages
import styled from 'styled-components';
import axios from 'axios';

// images
import img from '../../images/kontakt-img.jpg';

const StyledContainer = styled.div`
    width: 100%;
    height: 1400px;

    display: flex;
    justify-content: space-around;

    margin-top: 250px;

    img {
        width: 35%;
        height: 1000px;

        margin-top: 100px;

        object-fit: cover;
        object-position: center;

        @media (max-width: 1280px) {
            display: none;
        }
    }

    form {
        width: 50%;
        height: 900px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 1280px) { width: 80%; }
        @media (max-width: 1024px) { margin-top: 100px; }
        @media (max-width: 500px) { height: 1000px; }
        

        h1 {
            width: 100%;
            margin-bottom: 50px;

            font-size: 50px;
            text-align: center;
        }

        p {
            position: relative;
            width: 100%;

            @media (max-width: 500px) { margin: 30px 0 30px 0; }

            label {
                display: block;
                margin-bottom: 20px;

                text-align: center;
            }

            input,
            textarea {
                box-sizing: border-box;

                width: 100%;

                margin: 0;
                padding: 0 20px;

                background-color: #fff;
                border-radius: 3px;
                border: 2px solid #f2f2f2;

                font-size: 19px;

                @media (max-width: 500px) {
                    font-size: 13px;
                    padding: 0 10px;

                    &::placeholder {
                        color: transparent;
                    }
                }
            }

            input {
                height: 70px;

                @media (max-width: 500px) { height: 60px; }
            }
            
            textarea {
                box-sizing: border-box;

                height: 200px;
                padding-top: 10px;

                @media (max-width: 500px) { height: 150px; }
            }

            .errorTxt {
                position: absolute;
                top: 95%;

                font-size: 14px;
                color: red;

                @media (max-width: 500px) {
                    top: 75%;
                    text-align: center;
                }
            }

            .rodo {
                margin-top: 50px;
                font-size: 14px;

                @media (max-width: 500px) {
                    height: 350px;
                    span {
                        font-size: 11px;
                    }
                }

                .rodo-checkbox {
                    width: 14px;
                    height: 14px;

                    margin-right: 20px;
                }

                &:hover {
                    cursor: pointer;
                }
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

            @media (max-width: 500px) {
                margin-top: 0;
            }

            &:hover {
                transform: scale(0.97);
            }

            &:focus {
                outline: none;
            }
        }

        .polityka {
            text-decoration: none;
            color: #399ca1;

            @media (max-width: 500px) {
                font-size: 12px;
            }

            &:hover {
                text-decoration:underline;
            }
        }
    }

    /* @media (max-width: 1536px) {
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
    } */

    /* @media (max-width: 962px) {
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
    } */
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rodo, setRodo] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [rodoError, setRodoError] = useState('');

    const [send, setSend] = useState(false);


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
                        setSend('error');
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

                    <img src={img} alt='plants'/>

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
                                    (wymagane) Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest niezbędne do przetworzenia zapytania. Zostałem poinformowany o prawie dostępu do swoich danych, możliwości ich edytowania oraz żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest właściciel serwisu CzarOgród.pl.
                                </span>
                                <br/>
                                <br/>
                                <span >Zapoznaj się z naszą </span><Link className='polityka' to="/polityka_prywatności">Polityką prywatności</Link>
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

            </StyledContainer>
        </>
    );
};

export default Form;
