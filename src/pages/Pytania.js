import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Question from '../components/Pytania/Question';

import img from '../images/4.jpg';

const StyledContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 350px auto 0 auto;

    h1 {
        margin: 0 0 100px 0;
        font-size: 50px;
    }

    @media (max-width: 1024px) {
        h1 {
            margin-top: 170px;
        }
    }
`;

const ContactSlide = styled.div`
    width: 100%;

    .more-questions {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-image: url(${img});
        background-size: cover;
        background-position: center;

        margin-top: 100px;
        color: #fff;
        overflow: hidden;
    }

    h1 {
        width: 100vw;

        display: block;

        padding: 20px;
        background: rgba(0, 0, 0, 0.2);

        text-align: center;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 2px;
    }
`;

const Pytania = () => {
    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Pytania</h1>
                <Question
                    question="Ile trwa przygotowanie projektu?"
                    anwser="Czas przygotowania projektu zależy od wielu czynników, wpływa na to wielkość ogrodu,
poziom skomplikowania projektu, ilość zmian w trakcie procesu. Z reguły jest to okres kilku
– kilkunastu tygodni od momentu podpisania umowy."
                    leaf={true}
                />
                <Question
                    question="Co muszę wiedzieć przed podjęciem współpracy?"
                    anwser={[
                        'Przed przystąpieniem do projektowania, musimy wspólnie ustalić jakie są podstawowe potrzeby wszystkich użytkowników ogrodu oraz co w ogrodzie nam się podoba. Na te pytania poszukamy odpowiedzi podczas ',
                        <br />,
                        'pierwszego spotkania.',
                    ]}
                    leaf={true}
                />
                <Question
                    question="Co zawiera projekt?"
                    anwser={[
                        'Każdy projekt składa się z kilku części, jest to plansza pokazująca kolorystykę i nastrój w projektowanym ogrodzie ',
                        <br />,
                        '(tzw moodboard), plan koncepcyjny zagospodarowania ogrodu, szczegółowy plan techniczny, spis wszystkich roślin, plan oświetlenia oraz wizualizacje. Projekt może też zawierać propozycję altany, pergoli, podjazdu lub ogrodzenia.',
                    ]}
                    leaf={true}
                />
                <Question
                    question="Mam duży ogród, obawiam się, że koszt jego wykonania będzie zbyt duży wobec moich
obecnych możliwości."
                    anwser="Projekt ogrodu warto wykonać dla całości ogrodu, gdyż tylko to, docelowo, pozwoli nam
uzyskać zaplanowany efekt. Same prace wykonawcze można podzielić na mniejsze etapy,
na tyle na ile pozwala rodzinny budżet. Wspólnie możemy zdecydować, które części są
najważniejsze dla Ciebie i Twojej rodziny. Przygotujemy plan działania na przyszłość."
                    leaf={true}
                />
                <Question
                    question="Kiedy najlepiej zacząć projektowanie ogrodu?"
                    anwser="Im wcześniej tym lepiej! Ponieważ proces projektowania trwa kilka tygodni, warto przejść
przez ten etap z wyprzedzeniem, aby jak najszybciej cieszyć się swoim nowym
wymarzonym ogrodem."
                    leaf={true}
                />
                <Question
                    question="Mam tylko mały balkon, czy jest sens przygotowywać projekt?"
                    anwser="Nawet najmniejszą przestrzeń można zaczarować! Odpowiedni dobór roślin, mebli i
oświetlenia może zdziałać cuda nawet na małym balkonie."
                    leaf={true}
                />
                <Question
                    question="Ile kosztuje projekt?"
                    anwser="Każdy projekt wyceniany jest indywidualnie, jest to zależne przede wszystkim od
powierzchni ogrodu oraz od ilości elementów, które mają wchodzić w skład projektu.
Dodatkowe projekty altany, podjazdu czy oświetlenia będą wpływać na więcej pracy
projektowej, a co za tym idzie na wyższą cenę całości."
                    leaf={true}
                />
                <Question
                    question="Nie mam czasu na zajmowanie się ogrodem, czy da się zrobić ogród bezobsługowy?"
                    anwser="Mam pełną świadomość kosztu czasu każdego z nas, dlatego jeśli chcesz, zaprojektujemy
ogród, który będzie wymagał tylko minimalnej ingerencji człowieka. Równocześnie stanie
się miejscem relaksu i ozdobą nieruchomości."
                    leaf={true}
                />
                <Question
                    question="Co jeśli projekt mi się nie spodoba?"
                    anwser="Każdy etap procesu projektowania jest na bieżąco konsultowany, a projekt
przygotowywany jest pod indywidualne potrzeby klienta. Przy dobrze działającej
komunikacji między nami, projekt będzie dokładnie taki, jak marzenia o nim."
                    leaf={true}
                />
                <Question
                    question="Dopiero planuję budowę domu, czy to nie za wcześnie na projekt ogrodu?"
                    anwser="Etap projektowania domu jest idealnym momentem na przygotowanie projektu ogrodu!
Istnieje wtedy możliwość dopasowania wyglądu ogrodu i tarasu do projektowanych wnętrz,
tak aby razem stanowiły spójną całość."
                    leaf={false}
                />
                <Question question="" anwser="" leaf={false} />
            </StyledContainer>
            <ContactSlide>
                <Link to="/kontakt" style={{ textDecoration: 'none' }}>
                    <div className="more-questions">
                        <h1>Masz więcej pytań? Zadzwoń lub napisz</h1>
                    </div>
                </Link>
            </ContactSlide>
            <Footer />
        </>
    );
};

export default Pytania;
