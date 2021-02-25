import { FC } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Link from './Link';
import { ALL_PROJECTS } from './projectsConfig';
import styles from './styles/WorkDetails.module.css';
import colors from './styles/colors.module.css';

const WorkDetails: FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const project = ALL_PROJECTS.find(proj => proj.slug === slug);

    if (!project) {
        if (typeof window !== 'undefined') {
            window.open('/');
        }
        return null;
    }

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
    } = project || {};

    return (
        <div
            className={classNames(styles.container, colors[color], {
                [styles.fontColorBlack]: fontColor === 'black',
            })}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link
                        href="/work"
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
                <img
                    src={imageUrl}
                    alt={imageAlt}
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

export default WorkDetails;
