import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";

// tslint:disable-next-line no-unused-expression
injectGlobal`
  :root {
    box-sizing: border-box;
    margin: 0;
    min-height: 100%;
  }

  body {
    margin: 0;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  * {
    -webkit-text-size-adjust: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }
`;

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
