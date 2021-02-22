import { FC } from 'react';

import Project from './Project';
import styles from './Projects.module.css';

const PROJECTS = [
    {
        title: 'SNOWE PENTHOUSE WEST',
        subtitle:
            'An immersive retail experience designed to meet consumers where they are - in their homes.',
        className: styles.yellow,
        insight: 'Consumers',
        outcome: 'We win!',
        imageUrl: '/70-Pine_Living-Room-1280w.webp',
    },
    {
        title: "FLAVITA'S",
        subtitle:
            'An immersive retail experience designed to meet consumers where they are - in their homes. ',
        className: styles.green,
        insight: 'Consumers',
        outcome: 'Hot Sauceee!',
        imageUrl: '/CPG_Grocery_GTM.webp',
    },
];

const Projects: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>THE WORK</h1>
        </header>
        {PROJECTS.map(project => (
            <Project {...project} />
        ))}
    </article>
);

export default Projects;
