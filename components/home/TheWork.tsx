import { FC } from 'react';

import Link from '../shared/Link';
import ResponsiveImage from '../shared/ResponsiveImage';
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
                    <ResponsiveImage
                        filename={project.imageUrl}
                        imageAlt={project.imageAlt}
                        className={styles.image}
                        sizes={{
                            '913px': '50vw',
                            '1218px': '50vw',
                            '1220px': '50vw',
                        }}
                    />
                </Link>
            </div>
        ))}
    </div>
);

export default TheWork;
