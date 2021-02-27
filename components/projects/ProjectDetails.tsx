import { FC } from 'react';
import classNames from 'classnames';

import Link from '../shared/Link';
import ResponsiveImage from '../shared/ResponsiveImage';
import colors from '../shared/styles/colors.module.css';
import { ProjectType } from './projectsConfig';
import styles from './styles/ProjectDetails.module.css';

type Props = {
    project: ProjectType;
};

const ProjectDetails: FC<Props> = ({ project }) => {
    const {
        color,
        fontColor,
        title,
        subtitle,
        imageUrl,
        imageAlt,
        insight,
        action,
        outcome,
        recommendation,
        status,
        slug,
    } = project;

    return (
        <div
            className={classNames(styles.container, colors[color], {
                [styles.fontColorBlack]: fontColor === 'black',
            })}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link
                        nextLink
                        href={`/work#${slug}`}
                        underline={false}
                        openNewWindow={false}
                        className={styles.backButton}
                    >
                        →
                    </Link>
                    {title}
                </div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.imageContainer}>
                <ResponsiveImage
                    filename={imageUrl}
                    imageAlt={imageAlt}
                    className={styles.image}
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.insights}>
                    <span className={styles.bold}>Insight:</span>
                    <span>{insight}</span>
                </div>
                <div className={styles.insights}>
                    <span className={styles.bold}>Action:</span>
                    <span>{action}</span>
                </div>
                {outcome && (
                    <div className={styles.insights}>
                        <span className={styles.bold}>Outcome:</span>
                        <span>{outcome}</span>
                        <div className={styles.status}>{status}</div>
                    </div>
                )}
                {recommendation && (
                    <div className={styles.insights}>
                        <span className={styles.bold}>
                            Recommendation:
                        </span>
                        <span>{recommendation}</span>
                        <div className={styles.status}>{status}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
