import { FC } from 'react';

import { emailUrl, resumeUrl } from './links';
import styles from './Main.module.css';

const Main: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>Zaira Stefani Vallejo</h1>
        </header>
        <div className={styles.imageContainer}>
            <img className={styles.image} src="/trees.jpg" alt="Picture of trees" />
        </div>
        <div className={styles.portrait}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
                <img src="/zaira_portrait.jpg" alt="Portrait of Zaira" width={266} height={400} />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className={styles.work}>
            <p>Putting in Work</p>
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
            <a href="https://zaira.substack.com/welcome" target="_blank" rel="noopener noreferrer">
                Substack
            </a>
        </div>
        <div className={styles.resume}>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
            </a>
        </div>
        <div className={styles.contact}>
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                Contact Zaira
            </a>
        </div>
    </article>
);

export default Main;
