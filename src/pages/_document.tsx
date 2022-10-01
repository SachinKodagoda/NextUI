// /* eslint-disable react/jsx-props-no-spreading */
// import { CssBaseline } from '@nextui-org/react';
// import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }

//   render(): JSX.Element {
//     return (
//       <Html lang='en'>
//         <Head>
//           <link rel='preconnect' href='https://fonts.googleapis.com' />
//           <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
//           <link
//             href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
//             rel='stylesheet'
//           />
//           {CssBaseline.flush()}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

import React from 'react';

import { CssBaseline } from '@nextui-org/react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
