import { FC } from 'react';

import Link from './Link';
import { linkedInUrl, instagramUrl } from './links';
import styles from './styles/Footer.module.css';

const Footer: FC = () => (
    <footer className={styles.footer}>
        <div className={styles.footerSection}>
            <div className={styles.copyright}>
                © Zaira Stefani Vallejo 2021
            </div>
        </div>
        <div className={styles.footerSection}>
            <ul className={styles.socialLinks}>
                <li>
                    <Link
                        className={styles.socialLink}
                        href={linkedInUrl}
                    >
                        <img
                            src="/linkedin_64px.png"
                            width={20}
                            height={20}
                            alt="Link to Zaira Vallejo's LinkedIn profile"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.socialLink}
                        href={instagramUrl}
                    >
                        <img
                            src="/instagram_64px.png"
                            width={20}
                            height={20}
                            alt="Link to Zaira Vallejo's Instagram"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
