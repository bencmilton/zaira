import Image from 'next/image';
import { FC } from 'react';

import styles from './Main.module.css';

const Main: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>Zaira Stefani Vallejo</h1>
        </header>
        <div className={styles.image}>
            <Image src="/trees.jpg" alt="Picture of trees" layout="fill" />
        </div>
        <div className={styles.portrait}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
                <Image src="/zaira_portrait.jpg" alt="Portrait of Zaira" width={266} height={400} />
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
        </div>
        <div className={styles.divider}>"Lorem ipsum dolor sit amet" -- Puff</div>
        <div className={styles.substack}>
            <a href="https://zaira.substack.com/welcome" target="_blank" rel="noopener noreferrer">
                Substack
            </a>
        </div>
        <div className={styles.resume}>
            <a
                href="https://drive.google.com/file/d/1KTP-mhFr8mewMeoYcrcE0gPhA_d1ktwK/view"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
        </div>
        <div className={styles.contact}>
            <a
                href="mailto:holazsv@gmail.com?subject=Hola Zaira!"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact Zaira
            </a>
        </div>
        <div className={styles.footer}>© Zaira Stefani Vallejo 2021</div>
    </article>
);

export default Main;
