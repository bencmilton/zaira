import { FC, useState } from 'react';
import classNames from 'classnames';

import Link from '../shared/Link';
import { emailUrl, resumeUrl } from '../shared/links';
import TheWoman from './TheWoman';
import TheWork from './TheWork';
import styles from './styles/Home.module.css';

const Main: FC = () => {
    const [showMobileIntro, setShowMobileIntro] = useState(true);
    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div>
                    <p>
                        ¡Saludos! I’m{' '}
                        <span className={styles.name}>
                            Zaira Stefani Vallejo
                        </span>{' '}
                        - a Strategist and Brand Marketer interested
                        in the intersection of culture and commerce.
                        Specifically, how global trends and human
                        emotions shape spending behavior and the
                        future of our relationship with companies.
                    </p>
                    <p>
                        With an integrated approach to Marketing and
                        Business Strategy, companies can create better
                        products, build consumer bonds, and tell a
                        compelling story - all the while driving
                        growth, unlocking revenue, and cementing their
                        position as a legacy brand. Experience in
                        ecommerce and direct-to-consumer has shaped my
                        holistic, <i>very</i> hands-on approach to
                        working with brands: pushing them to have a
                        little fun and challenge the norm because
                        we're all just here for a good time.
                    </p>
                </div>
            </header>
            <div className={styles.imageContainer}>
                {showMobileIntro ? (
                    <img
                        className={classNames(
                            styles.mobileVideo,
                            styles.mobileIntro
                        )}
                        onClick={() => setShowMobileIntro(false)}
                        src="/process_chart/process_chart_intro_mobile.gif"
                        alt="Teaser introduction link to Zaira's thought process diagram"
                    />
                ) : (
                    <video
                        autoPlay
                        muted
                        playsInline
                        className={styles.mobileVideo}
                    >
                        <source
                            src="/process_chart/process_chart_mobile.webm"
                            type="video/webm"
                        />
                        <source
                            src="/process_chart/process_chart_mobile.mp4"
                            type="video/mp4"
                        />
                        <img
                            src="/process_chart/process_chart_mobile.jpeg"
                            className={styles.image}
                            alt="Zaira's strategy process chart"
                        />
                    </video>
                )}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                >
                    <source
                        src="/process_chart/process_chart.webm"
                        type="video/webm"
                    />
                    <source
                        src="/process_chart/process_chart.mp4"
                        type="video/mp4"
                    />
                    <img
                        src="/process_chart/process_chart.jpeg"
                        className={styles.image}
                        alt="Zaira's strategy process chart"
                    />
                </video>
            </div>
            <TheWoman />
            <TheWork />
            <div className={styles.divider}>
                <span>
                    “Okay, let's try that again, but this time good.”
                </span>{' '}
                <span>-- David Lynch</span>
            </div>
            <div
                className={classNames(
                    styles.homeLink,
                    styles.substack
                )}
            >
                <Link
                    underline={false}
                    href="https://perpetualplay.substack.com/"
                >
                    Substack
                </Link>
            </div>
            <div
                className={classNames(styles.homeLink, styles.resume)}
            >
                <Link underline={false} href={resumeUrl}>
                    Resume
                </Link>
            </div>
            <div
                className={classNames(
                    styles.homeLink,
                    styles.contact
                )}
            >
                <Link underline={false} href={emailUrl}>
                    Contact Zaira
                </Link>
            </div>
        </article>
    );
};

export default Main;
