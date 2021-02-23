import { FC } from 'react';

import Link from './Link';
import TheWoman from './TheWoman';
import TheWork from './TheWork';
import { emailUrl, resumeUrl } from './links';
import styles from './styles/Main.module.css';

const Main: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <p>
                ¡Saludos! I’m{' '}
                <span className={styles.name}>
                    Zaira Stefani Vallejo
                </span>{' '}
                - a strategist and brand marketer interested in the
                intersection of culture and commerce. Specifically,
                how global trends and the human need for
                self-actualization shape the 5 W’s (and 1 H) of
                spending behavior and our relationship with companies,
                small and large.
            </p>
            <p>
                Fact: breaking old habits is hard. In order to be
                game-changing, you have to get out of your comfort
                zone. I work with businesses to do just that - push
                them to color outside of the lines to become enviable,
                often-copied brands. Why? Because strong brand equity
                adds real bottomline value - and better brands have
                more fun!
            </p>
        </header>
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                src="/matisse.png"
                alt="Matisse cutout collage"
            />
        </div>
        <TheWoman />
        <TheWork />
        <div className={styles.divider}>
            "Lorem ipsum dolor sit amet" -- Puff
        </div>
        <div className={styles.substack}>
            <Link
                underline={false}
                href="https://zaira.substack.com/welcome"
            >
                Substack
            </Link>
        </div>
        <div className={styles.resume}>
            <Link underline={false} href={resumeUrl}>
                Resume
            </Link>
        </div>
        <div className={styles.contact}>
            <Link underline={false} href={emailUrl}>
                Contact Zaira
            </Link>
        </div>
    </article>
);

export default Main;
