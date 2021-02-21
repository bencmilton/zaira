import { FC } from 'react';
import Image from 'next/image';

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
                        href="https://www.linkedin.com/in/z-s-v/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.socialIcon}>
                            <Image src="/linkedin_64px.png" width={20} height={20} />
                        </span>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        className={styles.socialLink}
                        href="https://www.instagram.com/zairavallejo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.socialIcon}>
                            <Image src="/instagram_64px.png" width={20} height={20} />
                        </span>
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
