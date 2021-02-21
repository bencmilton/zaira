import { FC } from 'react';

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
