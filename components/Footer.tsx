import { FC } from 'react';

import { linkedInUrl, instagramUrl } from './links';
import styles from './Footer.module.css';

const Footer: FC = () => (
    <footer className={styles.footer}>
        <div className={styles.footerSection}>
            <div className={styles.copyright}>© Zaira Stefani Vallejo 2021</div>
        </div>
        <div className={styles.footerSection}>
            <ul className={styles.socialLinks}>
                <li>
                    <a
                        className={styles.socialLink}
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/linkedin_64px.png"
                            width={20}
                            height={20}
                            alt="Link to Zaira Vallejo's LinkedIn profile"
                        />
                    </a>
                </li>
                <li>
                    <a
                        className={styles.socialLink}
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/instagram_64px.png"
                            width={20}
                            height={20}
                            alt="Link to Zaira Vallejo's Instagram"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
