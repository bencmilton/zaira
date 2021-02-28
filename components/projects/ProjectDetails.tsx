import { FC } from 'react';
import classNames from 'classnames';

import Link from '../shared/Link';
import colors from '../shared/styles/colors.module.css';
import { ProjectType } from './projectsConfig';
import styles from './styles/ProjectDetails.module.css';

type Props = {
    project: ProjectType;
    setLogoColor?: SetLogoColor;
};

const ProjectDetails: FC<Props> = ({ project, setLogoColor }) => {
    const {
        color,
        fontColor,
        logoColor,
        title,
        subtitle,
        insight,
        action,
        outcome,
        recommendation,
        status,
        slug,
    } = project;

    setLogoColor(logoColor);

    return (
        <div
            className={classNames(styles.container, colors[color], {
                [styles.fontColorBlack]: fontColor === 'black',
            })}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link
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
