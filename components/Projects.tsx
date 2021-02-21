import { FC } from 'react';

import styles from './About.module.css';

const Projects: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>Projects</h1>
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

export default Projects;
