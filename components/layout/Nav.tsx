import { FC, useState, useEffect } from 'react';
import classNames from 'classnames';

import Link from '../shared/Link';
import SocialLinks from '../shared/SocialLinks';
import { emailUrl, resumeUrl } from '../shared/links';
import colors from '../shared/styles/colors.module.css';
import { ALL_PROJECTS } from '../projects/projectsConfig';
import styles from './styles/Nav.module.css';

type Props = {
    logoColor: Color;
};

const Nav: FC<Props> = ({ logoColor }) => {
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
            <header
                className={classNames(styles.navContainer, {
                    [styles.navContainerIsOpen]: isOpen,
                })}
            >
                <div className={styles.navInnerContainer}>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className={classNames(
                            styles.navLogo,
                            styles[logoColor],
                            {
                                [styles.navLogoIsOpen]: isOpen,
                            }
                        )}
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
                                className={classNames(
                                    styles.link,
                                    colors.black
                                )}
                                href={emailUrl}
                            >
                                CONTACT
                            </Link>
                        </li>
                        {ALL_PROJECTS.map(
                            ({ title, color, slug }) => (
                                <li key={`nav-link-${title}`}>
                                    <Link
                                        openNewWindow={false}
                                        className={classNames(
                                            styles.link,
                                            colors[color]
                                        )}
                                        href={`/work#${slug}`}
                                        onClick={() =>
                                            setIsOpen(false)
                                        }
                                    >
                                        {title}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Nav;
