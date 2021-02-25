import { FC } from 'react';

import Link from './Link';
import { HOME_PAGE_PROJECTS } from './Projects';
import styles from './styles/TheWork.module.css';

const TheWork: FC = () => (
    <div className={styles.container}>
        <div className={styles.header}>THE WORK</div>
        {HOME_PAGE_PROJECTS.map(project => (
            <div key={project.id} className={styles.section}>
                {project.description}{' '}
                <Link
                    openNewWindow={false}
                    className={styles.link}
                    href={`/work?project=${project.id}`}
                >
                    See More.
                </Link>
                <Link
                    openNewWindow={false}
                    href={`/work?project=${project.id}`}
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
