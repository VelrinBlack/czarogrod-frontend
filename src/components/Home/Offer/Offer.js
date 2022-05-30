import StyledWrapper from './Offer.style';
import router from 'next/router';

const Offer = () => (
  <StyledWrapper>
    <div className='container'>
      <div className='image-container'>
        <img src='/images/other/profile2.webp' alt='Mój portret' />
      </div>
      <div className='text-container'>
        <p>
          Moje portfolio obejmuje przekrój rozmaitych projektów: od niewielkich miejskich tarasów,
          przez podmiejskie ogrody, aż do wiejskich kilkudziesięcioarowych siedlisk.{' '}
        </p>
        <p>
          <ul>
            <li>Mały balkon pośrodku miejskiej dżungli? Witaj nowa oazo relaksu!</li>
            <li>
              Niewielka szeregówka i brak przestrzeni? Pozwól się zaskoczyć przemyślanymi i
              dopasowanymi rozwiązaniami!
            </li>
            <li>Nieforemna działka z dużym spadkiem? Projety specjalne to moja specjalność!</li>
          </ul>
        </p>
        <p>
          Współpracjuję ze sprawdzoną firmą wykonawczą, która szybko i sprawnie zrealizuje każdy mój
          projekt od A do Z.
        </p>
        <a
          className='see-more'
          href={`/oferta`}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/oferta`);
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Szczegóły oferty
        </a>
      </div>
    </div>
  </StyledWrapper>
);

export default Offer;
