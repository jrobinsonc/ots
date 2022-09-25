import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC, Page } from 'src/types';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const pageTitle: string | undefined = (Component as Page)?.pageTitle;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {pageTitle && <title>{pageTitle}</title>}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer></footer>
    </>
  );
};

export default MyApp;
