import { FC } from 'react';

import SocialLinks from '../shared/SocialLinks';
import styles from './styles/Footer.module.css';

const Footer: FC = () => (
    <footer className={styles.footer}>
        <div className={styles.footerSection}>
            <div className={styles.copyright}>
                © Zaira Stefani Vallejo 2021
            </div>
        </div>
        <div className={styles.footerSection}>
            <SocialLinks
                containerStyle={styles.socialLinks}
                linkStyle={styles.socialLink}
            />
        </div>
    </footer>
);

export default Footer;
