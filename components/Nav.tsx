import { FC, useState } from 'react';

import styles from './Nav.module.css';

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <div
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.navHidden}
            >
                <>
                    <div>Z</div>
                    <div>S</div>
                    <div>V</div>
                </>
            </div>
        );
    }

    return (
        <div
            className={styles.navOpen}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <ul className={styles.navItems}>
                <li>
                    <a className={styles.link} href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a className={styles.link} href="/about">
                        About
                    </a>
                </li>
                <li>
                    <a className={styles.link} href="/projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a className={styles.link} href="/resume">
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        className={styles.link}
                        href="mailto:zaira@holazsv.com?subject=Hola Zaira!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
