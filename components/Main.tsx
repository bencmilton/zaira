import { FC } from 'react';

import Link from './Link';
import { emailUrl, resumeUrl } from './links';
import styles from './Main.module.css';

const Main: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <p>
                ¡Saludos! I’m <span className={styles.name}>Zaira Stefani Vallejo</span> - a
                strategist and brand marketer interested in the intersection of culture and
                commerce. Specifically, how global trends and the human need for self-actualization
                shape the 5 W’s (and 1 H) of spending behavior and our relationship with companies,
                small and large.
            </p>
            <p>
                Fact: breaking old habits is hard. In order to be game-changing, you have to get out
                of your comfort zone. I work with businesses to do just that - push them to color
                outside of the lines to become enviable, often-copied brands. Why? Because strong
                brand equity adds real bottomline value - and better brands have more fun!
            </p>
        </header>
        <div className={styles.imageContainer}>
            <img className={styles.image} src="/trees.webp" alt="Picture of trees" />
        </div>
        <div className={styles.aboutMe}>
            <h4 className={styles.aboutMeHeader}>
                So, here’s me. And since you asked, Zaira rhymes with Tyra, as in Banks.
            </h4>
            <picture>
                <source media="(max-width: 667px)" srcSet="/zaira_portrait-260w.webp" />
                <source media="(min-width: 668px)" srcSet="/zaira_portrait-480w.webp" />
                <img
                    src="/zaira_portrait-260w.webp"
                    alt="Portrait of Zaira"
                    width={260}
                    height={390}
                />
            </picture>
            <div className={styles.aboutMeBeliefs}>
                <div>A few things I believe in:</div>
                <ul className={styles.aboutMeList}>
                    <li className={styles.aboutMeListItem}>
                        <Link
                            className={styles.aboutMeLink}
                            href="https://www.americaneedsyou.org/locations/nyny/ny-young-leadership-board/"
                        >
                            The power of mentorship
                        </Link>
                    </li>
                    <li className={styles.aboutMeListItem}>
                        <Link
                            className={styles.aboutMeLink}
                            href="https://www.nytimes.com/2014/06/15/travel/finding-mexico-city-and-luis-barragan-again.html"
                        >
                            Good design
                        </Link>
                    </li>
                    <li className={styles.aboutMeListItem}>
                        <Link className={styles.aboutMeLink} href="https://www.nypl.org/">
                            Continued learning
                        </Link>
                    </li>
                    <li className={styles.aboutMeListItem}>
                        <Link className={styles.aboutMeLink} href="https://youtu.be/KXg5JSKVlPU">
                            NYC magic
                        </Link>
                    </li>
                    <li className={styles.aboutMeListItem}>
                        <Link
                            className={styles.aboutMeLink}
                            href="https://www.instagram.com/p/B4n8zYZFSh_/"
                        >
                            A cold martini (always gin)
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.work}>
            <h4>Putting in Work</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className={styles.divider}>"Lorem ipsum dolor sit amet" -- Puff</div>
        <div className={styles.substack}>
            <Link underline={false} href="https://zaira.substack.com/welcome">
                Substack
            </Link>
        </div>
        <div className={styles.resume}>
            <Link underline={false} href={resumeUrl}>
                Resume
            </Link>
        </div>
        <div className={styles.contact}>
            <Link underline={false} href={emailUrl}>
                Contact Zaira
            </Link>
        </div>
    </article>
);

export default Main;
