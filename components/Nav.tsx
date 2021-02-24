import { FC, useState } from 'react';
import classNames from 'classnames';

import Link from './Link';
import { emailUrl, resumeUrl } from './links';
import { PROJECTS } from './Projects';
import styles from './styles/Nav.module.css';
import colors from './styles/colors.module.css';

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLogoLetterStyle = classNames(styles.navLogoLetter, {
        [styles.rotateLetter]: isOpen,
    });

    return (
        <header className={styles.navContainer}>
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
                className={classNames(styles.closeButton, {
                    [styles.closeButtonOpen]: isOpen,
                })}
                onClick={() => setIsOpen(false)}
            >
                X
            </div>
            <nav
                tabIndex={1}
                className={classNames(styles.navContent, {
                    [styles.showNavContent]: isOpen,
                })}
            >
                <ul className={styles.navItems}>
                    <li key="nav-link-home">
                        <Link
                            openNewWindow={false}
                            className={styles.link}
                            href="/"
                        >
                            HOME
                        </Link>
                    </li>
                    <li key="nav-link-resume">
                        <Link
                            className={styles.link}
                            href={resumeUrl}
                        >
                            RESUME
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={emailUrl}>
                            CONTACT
                        </Link>
                    </li>
                    {PROJECTS.map(project => (
                        <li key={`nav-link-${project.title}`}>
                            <Link
                                openNewWindow={false}
                                className={classNames(
                                    styles.link,
                                    colors[project.color]
                                )}
                                href="/work"
                            >
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
