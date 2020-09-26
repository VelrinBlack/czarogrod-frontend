import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head></Head>

        <body>
          <Main />
          <NextScript />
          <script src='https://skrypt-cookies.pl/id/315514c2a9f58a07.js'></script>
        </body>
      </Html>
    );
  }
}
