import {
    FC,
    useEffect,
    useState,
    cloneElement,
    isValidElement,
} from 'react';
import Head from 'next/head';

import Nav from './Nav';
import Footer from './Footer';

type Props = {
    pageTitle: string;
    pageDescription: string;
    showFooter?: boolean;
};

const PageLayout: FC<Props> = ({
    pageTitle,
    pageDescription,
    showFooter = true,
    children,
}) => {
    const [logoColor, setLogoColor] = useState<Color>('red');

    useEffect(() => {
        function onPopState() {
            if (typeof window !== undefined && location) {
                location.reload();
            }
        }

        if (typeof window !== undefined) {
            window.addEventListener('popstate', onPopState);
        }

        return () => {
            if (typeof window !== undefined) {
                window.removeEventListener('popstate', onPopState);
            }
        };
    }, []);

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="title" content={pageTitle} />
                <meta name="description" content={pageDescription} />
            </Head>
            <Nav logoColor={logoColor} />
            <main>
                <section>
                    {isValidElement(children) &&
                        cloneElement(children, {
                            logoColor,
                            setLogoColor,
                        })}
                </section>
                {showFooter && <Footer />}
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

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .noscroll {
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default PageLayout;
