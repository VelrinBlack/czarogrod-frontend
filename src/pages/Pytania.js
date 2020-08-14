// react
import React, { useEffect } from 'react';

// external packages
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Question from '../components/Pytania/Question';
import SingleSlide from '../components/SingleSlide';

// images
import img from '../images/slider/4.jpg';


const StyledContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 350px auto 0 auto;

    h1 {
        margin-bottom: 100px;
        font-size: 50px;

        @media (max-width: 1024px) { margin-top: 170px; }
    }

    @media (max-width: 1280px) { width: 70% }
    @media (max-width: 1024px) { width: 80% }
    @media (max-width: 768px) { width: 90% }
`;

const Pytania = () => {

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Pytania</h1>
                <Question 
                    question='W jakiej części Polski działa Czarogród.pl?'
                    anwser='Mieszkam w Alwerni, niewielkiej miejscowości w połowie drogi między Krakowem, a Katowicami, dlatego główny obszar działania to województwa małopolskie i śląskie, jednak w przypadku mniejszych projektów z innych części Polski, z chęcią podejmę się współpracy z Tobą w sposób zdalny.'
                    leaf
                />
                <Question
                    question='Ile trwa przygotowanie projektu?'
                    anwser='Czas przygotowania projektu zależy od wielu czynników, wpływa na to wielkość ogrodu, poziom skomplikowania projektu, ilość zmian w trakcie procesu. Z reguły jest to okres kilku – kilkunastu tygodni od momentu podpisania umowy.'
                    leaf
                />
                <Question
                    question='Co muszę wiedzieć przed podjęciem współpracy?'
                    anwser='Przed przystąpieniem do projektowania, musimy wspólnie ustalić jakie są podstawowe potrzeby wszystkich użytkowników ogrodu oraz co w ogrodzie nam się podoba. Na te pytania poszukamy odpowiedzi podczas pierwszego spotkania.'
                    leaf
                />
                <Question
                    question='Co zawiera projekt?'
                    anwser='Każdy projekt składa się z kilku części, jest to plansza pokazująca kolorystykę i nastrój w projektowanym ogrodzie (tzw moodboard), plan koncepcyjny zagospodarowania ogrodu, szczegółowy plan techniczny, spis wszystkich roślin, plan oświetlenia oraz wizualizacje. Projekt może też zawierać propozycję altany, pergoli, podjazdu lub ogrodzenia.'
                    leaf
                />
                <Question
                    question='Mam duży ogród, obawiam się, że koszt jego wykonania będzie zbyt duży wobec moich obecnych możliwości.'
                    anwser='Projekt ogrodu warto wykonać dla całości ogrodu, gdyż tylko to, docelowo, pozwoli nam uzyskać zaplanowany efekt. Same prace wykonawcze można podzielić na mniejsze etapy, na tyle na ile pozwala rodzinny budżet. Wspólnie możemy zdecydować, które części sąnajważniejsze dla Ciebie i Twojej rodziny. Przygotujemy plan działania na przyszłość.'
                    leaf
                />
                <Question
                    question='Kiedy najlepiej zacząć projektowanie ogrodu?'
                    anwser='Im wcześniej tym lepiej! Ponieważ proces projektowania trwa kilka tygodni, warto przejść    przez ten etap z wyprzedzeniem, aby jak najszybciej cieszyć się swoim nowym wymarzonym ogrodem.'
                    leaf
                />
                <Question
                    question='Mam tylko mały balkon, czy jest sens przygotowywać projekt?'
                    anwser='Nawet najmniejszą przestrzeń można zaczarować! Odpowiedni dobór roślin, mebli i oświetlenia może zdziałać cuda nawet na małym balkonie.'
                    leaf
                />
                <Question
                    question='Ile kosztuje projekt?'
                    anwser='Każdy projekt wyceniany jest indywidualnie, jest to zależne przede wszystkim od powierzchni ogrodu oraz od ilości elementów, które mają wchodzić w skład projektu. Dodatkowe projekty altany, podjazdu czy oświetlenia będą wpływać na więcej pracy projektowej, a co za tym idzie na wyższą cenę całości.'
                    leaf
                />
                <Question
                    question='Nie mam czasu na zajmowanie się ogrodem, czy da się zrobić ogród bezobsługowy?'
                    anwser='Mam pełną świadomość kosztu czasu każdego z nas, dlatego jeśli chcesz, zaprojektujemy ogród, który będzie wymagał tylko minimalnej ingerencji człowieka. Równocześnie stanie się miejscem relaksu i ozdobą nieruchomości.'
                    leaf
                />
                <Question
                    question='Co jeśli projekt mi się nie spodoba?'
                    anwser='Każdy etap procesu projektowania jest na bieżąco konsultowany, a projekt przygotowywany jest pod indywidualne potrzeby klienta. Przy dobrze działającej komunikacji między nami, projekt będzie dokładnie taki, jak marzenia o nim.'
                    leaf
                />
                <Question
                    question='Dopiero planuję budowę domu, czy to nie za wcześnie na projekt ogrodu?'
                    anwser='Etap projektowania domu jest idealnym momentem na przygotowanie projektu ogrodu! Istnieje wtedy możliwość dopasowania wyglądu ogrodu i tarasu do projektowanych wnętrz, tak aby razem stanowiły spójną całość.'
                />
            </StyledContainer>

            <SingleSlide
                text='Masz więcej pytań? Zadzwoń lub napisz'
                location='/kontakt'
                image={img}
            />

            <Footer />
        </>
    );
};

export default Pytania;
