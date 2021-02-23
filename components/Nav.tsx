import { FC, useState } from 'react';
import classNames from 'classnames';

import Link from './Link';
import { emailUrl, resumeUrl } from './links';
import styles from './Nav.module.css';

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLogoLetterStyle = classNames(styles.navLogoLetter, {
        [styles.rotateLetter]: isOpen,
    });

    return (
        <div className={styles.navContainer}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={classNames(styles.navLogo, {
                    [styles.isOpen]: isOpen,
                })}
            >
                <>
                    <div className={navLogoLetterStyle}>Z</div>
                    <div className={navLogoLetterStyle}>S</div>
                    <div className={navLogoLetterStyle}>V</div>
                </>
            </div>
            <div
                className={classNames(styles.navContent, {
                    [styles.showNavContent]: !isOpen,
                })}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ul className={styles.navItems}>
                    <li>
                        <Link
                            openNewWindow={false}
                            className={styles.link}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            openNewWindow={false}
                            className={styles.link}
                            href="/work"
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            href={resumeUrl}
                        >
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
        </div>
    );
};

export default Nav;
