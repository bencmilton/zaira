import { FC } from 'react';

import Link from '../shared/Link';
import { HOME_PAGE_PROJECTS } from '../projects/projectsConfig';
import styles from './styles/TheWork.module.css';

const TheWork: FC = () => (
    <div className={styles.container}>
        <div className={styles.header}>THE WORK</div>
        {HOME_PAGE_PROJECTS.map(project => (
            <div key={project.slug} className={styles.section}>
                {project.description}{' '}
                <Link
                    openNewWindow={false}
                    className={styles.link}
                    href={`/work#${project.slug}`}
                >
                    See More.
                </Link>
                <Link
                    openNewWindow={false}
                    href={`/work#${project.slug}`}
                >
                    <img
                        className={styles.image}
                        src={project.imageUrl.replace(
                            '1220w',
                            '406w'
                        )}
                        width={406}
                        height={228}
                        alt={project.imageAlt}
                    />
                </Link>
            </div>
        ))}
    </div>
);

export default TheWork;
