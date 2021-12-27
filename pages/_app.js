import React from 'react';
import Head from 'next/head';

import './styles.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel='icon' href='https://czarogrod.pl/images/other/logo.png' />

      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-ZW0DS1LNZZ'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZW0DS1LNZZ');
        `,
        }}
      />
      <meta
        name='description'
        content='Projektowanie ogrodów województwo małopolskie, śląskie. Architektura krajobrazu, projekt ogrodu, projekt tarasu. Nowoczesne ogrody Kraków, ogrody Katowice.'
      ></meta>
    </Head>
    <Component {...pageProps} />
    <script src='https://skrypt-cookies.pl/id/315514c2a9f58a07.js'></script>
  </>
);

export default App;
