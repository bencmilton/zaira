import { FC, useState } from 'react';

import Link from './Link';
import { emailUrl, resumeUrl } from './links';
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
                    <Link openNewWindow={false} className={styles.link} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link openNewWindow={false} className={styles.link} href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link openNewWindow={false} className={styles.link} href="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={resumeUrl}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={emailUrl}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
