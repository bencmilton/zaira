import { FC } from 'react';

import styles from './About.module.css';

const About: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>About Me</h1>
        </header>
        <div className={styles.content}>
            <ol>
                <li>One puff</li>
                <li>Two puffs</li>
                <li>White puff</li>
                <li>Cute puff</li>
            </ol>
        </div>
    </article>
);

export default About;
