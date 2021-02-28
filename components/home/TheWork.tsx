import { FC } from 'react';

import Link from '../shared/Link';
import ResponsiveImage from '../shared/ResponsiveImage';
import { HOME_PAGE_PROJECTS } from '../projects/projectsConfig';
import styles from './styles/TheWork.module.css';

const TheWork: FC = () => (
    <div className={styles.container}>
        <div className={styles.header}>THE WORK</div>
        {HOME_PAGE_PROJECTS.map(
            ({ slug, description, imageAlt, imageUrl }) => (
                <div key={slug} className={styles.section}>
                    {description}{' '}
                    <Link
                        openNewWindow={false}
                        className={styles.link}
                        href={`/work#${slug}`}
                    >
                        See More.
                    </Link>
                    <Link
                        openNewWindow={false}
                        href={`/work#${slug}`}
                    >
                        <ResponsiveImage
                            filename={imageUrl}
                            imageAlt={imageAlt}
                            className={styles.image}
                        />
                    </Link>
                </div>
            )
        )}
    </div>
);

export default TheWork;
