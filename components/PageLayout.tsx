import { FC } from 'react';
import Head from 'next/head';

import Nav from './Nav';

type Props = {
    pageTitle: string;
};

const PageLayout: FC<Props> = props => (
    <div className="app">
        <Head>
            <title>{props.pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav />
        <main className="main">
            <section>{props.children}</section>
        </main>
        <style global jsx>{`
            :global(html, body) {
                margin: 0;
                padding: 0;
                height: 100%;
            }

            :global(body) {
                font-size: calc(10px + 1vmin);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
            }

            #__next {
                width: 100%;
                height: 100%;
            }

            a {
                color: white;
                text-decoration: none;
            }

            .app {
                width: 100%;
                height: 100%;
            }

            main {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                width: 100%;
                height: 100%;
            }

            section {
                grid-column: 1;
                grid-row: 1;
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

export default PageLayout;
