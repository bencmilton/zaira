import { FC } from 'react';

import Link from '../shared/Link';
import styles from './styles/TheWoman.module.css';

const TheWoman: FC = () => (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.header}>THE WOMAN</div>
            <div className={styles.subHeader}>
                So, here’s me.{' '}
                <div>
                    And since you asked, Zaira rhymes with Tyra,{' '}
                    <i>as in Banks.</i>
                </div>
            </div>
        </div>
        <picture>
            <source
                media="(max-width: 667px)"
                srcSet="/zaira_portrait-260w.webp"
            />
            <source
                media="(min-width: 668px)"
                srcSet="/zaira_portrait-480w.webp"
            />
            <img
                src="/zaira_portrait-260w.webp"
                alt="Portrait of Zaira"
                width={260}
                height={390}
            />
        </picture>
        <div className={styles.beliefs}>
            <div>A few things I believe in:</div>
            <ul>
                <li className={styles.listItem}>
                    <Link
                        className={styles.link}
                        href="https://www.google.com/search?q=bu%C3%B1uelos+colombianos&source=lnms&tbm=isch"
                    >
                        Buñuelos
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={styles.link}
                        href="https://www.nytimes.com/2014/06/15/travel/finding-mexico-city-and-luis-barragan-again.html"
                    >
                        Good design
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={styles.link}
                        href="https://www.nypl.org/"
                    >
                        Infinite stacks of books
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={styles.link}
                        href="https://youtu.be/KXg5JSKVlPU"
                    >
                        NYC magic
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={styles.link}
                        href="https://www.instagram.com/p/B4n8zYZFSh_/"
                    >
                        A cold martini (always gin)
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default TheWoman;
