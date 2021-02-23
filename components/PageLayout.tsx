import { FC } from 'react';
import Head from 'next/head';

import Nav from './Nav';
import Footer from './Footer';

type Props = {
    pageTitle: string;
};

const PageLayout: FC<Props> = ({ pageTitle, children }) => (
    <div>
        <Head>
            <title>{pageTitle}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta
                name="description"
                content="Welcome to Zaira Stefani Vallejo's personal website!"
            />
        </Head>
        <Nav />
        <main>
            <section>{children}</section>
            <Footer />
        </main>
        <style global jsx>{`
            :global(html, body) {
                margin: 0;
                padding: 0;
                height: 100%;
                --zaira-tan: #e7d8b5;
                --zaira-yellow: #feb837;
                --zaira-red: #f50301;
                --zaira-green: #0f963f;
                --zaira-blue: #0424af;
            }

            :global(body) {
                font-size: calc(10px + 1vmin);
                font-family: -apple-system, BlinkMacSystemFont,
                    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
                    'Cantarell', 'Fira Sans', 'Droid Sans',
                    'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-align: center;
            }

            #__next {
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

export default PageLayout;
