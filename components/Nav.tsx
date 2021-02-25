import { FC, useState, useEffect } from 'react';
import classNames from 'classnames';

import Link from './Link';
import { emailUrl, resumeUrl } from './links';
import { PROJECTS } from './Projects';
import SocialLinks from './SocialLinks';
import styles from './styles/Nav.module.css';
import colors from './styles/colors.module.css';

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }
    }, [isOpen]);

    const navLogoLetterStyle = classNames(styles.navLogoLetter, {
        [styles.rotateLetter]: isOpen,
    });

    return (
        <>
            <header className={styles.navContainer}>
                <div className={styles.navInnerContainer}>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className={classNames(styles.navLogo, {
                            [styles.isOpen]: isOpen,
                        })}
                    >
                        <>
                            <div className={navLogoLetterStyle}>
                                Z
                            </div>
                            <div className={navLogoLetterStyle}>
                                S
                            </div>
                            <div className={navLogoLetterStyle}>
                                V
                            </div>
                        </>
                    </div>
                    <SocialLinks
                        containerStyle={classNames(
                            styles.socialLinks,
                            {
                                [styles.socialLinksOpen]: isOpen,
                            }
                        )}
                        listItemStyle={styles.socialLinkItem}
                        linkStyle={classNames(styles.socialLink, {
                            [styles.linkDisabled]: !isOpen,
                        })}
                    />
                    <div
                        className={classNames(styles.closeButton, {
                            [styles.closeButtonOpen]: isOpen,
                        })}
                        onClick={() => setIsOpen(false)}
                    >
                        X
                    </div>
                </div>
            </header>
            <div
                className={classNames(styles.contentWrapper, {
                    [styles.showContentWrapper]: isOpen,
                })}
                onClick={() => setIsOpen(false)}
            >
                <nav
                    tabIndex={1}
                    className={styles.navContent}
                    onClick={event => event.stopPropagation()}
                >
                    <ul className={styles.navItems}>
                        <li key="nav-link-home">
                            <Link
                                openNewWindow={false}
                                className={classNames(
                                    styles.link,
                                    colors.yellow
                                )}
                                href="/"
                            >
                                HOME
                            </Link>
                        </li>
                        <li key="nav-link-resume">
                            <Link
                                className={classNames(
                                    styles.link,
                                    colors.red
                                )}
                                href={resumeUrl}
                            >
                                RESUME
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                href={emailUrl}
                            >
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
                                    href={`/work?project=${project.id}`}
                                >
                                    {project.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Nav;
