import React, { useEffect } from 'react';
import { StyledContainer } from './OfferStyles';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Offer = () => {
  return (
    <>
      <StyledContainer>
        <h1>Oferta</h1>
        <h2>
          Marzysz o pięknym ogrodzie? Zapraszam do współpracy, razem
          przygotujemy projekt Twojego ogrodu, tarasu lub balkonu.
        </h2>
        <h2>Jak przebiega proces projektowania?</h2>
        <ul>
          <li>
            Pierwsze spotkanie to zazwyczaj wizyta w miejscu planowanego ogrodu
            oraz rozmowa o Waszych marzeniach.
          </li>
          <li>
            Współpracę zaczynamy od ustalenia zakresu projektu, podpisania umowy
            i określenia terminu wykonania.
          </li>
          <li>
            Wspólnie ustalamy potrzeby, które muszą być uwzględnione przy
            projektowaniu oraz co się Wam podoba, a czego chcemy uniknąć.
          </li>
          <li>
            Przygotowanie dwóch wstępnych koncepcji na podstawie przekazanych
            wcześniej informacji oraz wizualizacji najbardziej
            charakterystycznych fragmentów ogrodu.
          </li>
          <li>
            Teraz czas na wybór ostatecznej koncepcji, a także na wszelkie
            poprawki i zmiany.
          </li>
          <li>Wybieramy rośliny, które mają znaleźć się w ogrodzie.</li>
          <li>
            Wspólnie ustalona koncepcja przechodzi do dalszej realizacji,
            powstaje szczegółowy plan nasadzeń roślinnych oraz dokładny plan
            całego ogrodu.
          </li>
          <li>
            Projekt jest gotowy, podpowiem Wam jak wybrać firmę wykonawczą, lub
            jak zabrać się za samodzielną realizację.
          </li>
          <li>Teraz pozostaje już tylko relaks w Waszym nowym ogrodzie!</li>
        </ul>
        Proces przebiega podobnie przy projektowaniu mniejszych przestrzeni jak
        taras, czy balkon, pomijamy wtedy tylko niepotrzebne etapy, a niektóre z
        nich ulegają przyspieszeniu. Przy realizacji tego typu projektów
        zazwyczaj wystarcza komunikacja zdalna. Cel jest zawsze ten sam,
        stworzyć zaczarowane miejsce, z którego z przyjemnością będziecie
        korzystać.
        <h2>Co zawiera projekt?</h2>
        Każdy projekt składa się z kilku kolejno przygotowywanych części:
        <ul>
          <li></li>plansza pokazująca kolorystykę i nastrój w projektowanym
          ogrodzie (tak zwany moodboard),
          <li>
            plan koncepcyjny zagospodarowania ogrodu, czyli rozmieszczenie
            wszystkich najważniejszych elementów, podział terenu na strefy
            funkcjonalne, zaplanowanie ciągów komunikacyjnych oraz małej
            architektury,
          </li>
          <li>
            szczegółowy plan techniczny pokazujący dokładne rozmieszczenie
            roślin, ścieżek, tarasów, mebli ogrodowych, uwzględniający już
            istniejące elementy,
          </li>
          <li>spis wszystkich roślin wraz z ich krótką charakterystyką,</li>
          <li>plan oświetlenia,</li>
          <li>
            wizualizacje, które pomogą w wyobrażeniu sobie finalnego efektu,
          </li>
          <li>
            projekt może również zawierać propozycję altany, pergoli, drewutni,
            altany śmietnikowej, podjazdu lub ogrodzenia, wszystko zależy od
            tego, jakie elementy zawrzemy w podpisywanej umowie.
          </li>
        </ul>
        Projekt wykonany przeze mnie pozwala na wygodnie zlecenie realizacji
        ogrodu firmie wykonawczej, jak również na swobodną realizację we własnym
        zakresie.
      </StyledContainer>

      <SingleSlide
        text='Masz wątpliwości? Zobacz o co pytają klienci'
        location='/pytania'
        image={'/images/slider/3.jpg'}
      />

      <SingleSlide
        text='Sprawdź moje ostatnie projekty'
        location='/portfolio'
        image={'/images/slider/4.jpg'}
      />
    </>
  );
};

export default Offer;
