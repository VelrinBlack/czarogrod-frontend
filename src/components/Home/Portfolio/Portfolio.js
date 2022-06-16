import StyledWrapper from './Portfolio.style';
import router from 'next/router';

const Portfolio = ({ data }) => (
  <StyledWrapper>
    <div className='container'>
      <div className='text-container'>
        <p>
          Współpraca ze mną to gwarancja terminowości, staranności, świeżego spojrzenia oraz
          dopasowania do Twoich potrzeb.
        </p>
        <p>
          Kilkuletnie doświadczenie zawodowe zdobyte podczas pracy w międzynarodowych korporacjach
          wykorzystuję by zaoferować Ci kompletny produkt:
        </p>
        <p>
          <ul>
            <li>dokładnie dopasowany do Twoich potrzeb, unikalny i niepowtarzalny - jak Ty,</li>
            <li>
              gotowy do realizacji: zarówno systemem gospodarczym, jak i przez każdą firmę
              wykonawczą,
            </li>
            <li>
              uwzględniający Twoje możliwości finansowe: plan pracy podzielowny na poszczególne
              etapy, które mogą być realizowane w elastycznych ramach,
            </li>
            <li>
              bez niespodzianek: otrzymujesz pełne zestawienie dopasowanych indywidualnie roślin,
              nasadzeń i materiałów.
            </li>
          </ul>
        </p>
        <p>
          Tutaj możesz zobaczyć niektóre z moich projektów. Zapraszam Cię do kontaktu, z chęcią
          porozmawiam o Twoich oczekiwaniach.
        </p>
      </div>

      <div className='images-section-container'>
        <div className='images-container'>
          {data && data.slice(0, 6).map(({ image }) => <img src={image.url} key={image._id} />)}
        </div>

        <a
          className='see-more'
          href={`/portfolio`}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/portfolio`);
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Zobacz jak może wyglądać Twój przyszły ogród
        </a>
      </div>
    </div>
  </StyledWrapper>
);

export default Portfolio;
