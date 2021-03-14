import { FC, useEffect } from 'react';
import classNames from 'classnames';

import Link from '../shared/Link';
import colors from '../shared/styles/colors.module.css';
import { ProjectType } from './projectsConfig';
import styles from './styles/ProjectDetails.module.css';

type Props = {
    project: ProjectType;
    setLogoColor?: SetLogoColor;
};

const INFO_SECTIONS = [
    'insight',
    'action',
    'outcome',
    'recommendation',
];

const ProjectDetails: FC<Props> = ({ project, setLogoColor }) => {
    const {
        color,
        fontColor,
        logoColor,
        title,
        subtitle,
        status,
        slug,
        detailsColors,
    } = project;

    useEffect(() => {
        setLogoColor(logoColor);
    }, [logoColor]);

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
                {INFO_SECTIONS.map(
                    (section, index) =>
                        project[section] && (
                            <div
                                key={section}
                                className={classNames(
                                    styles.insights,
                                    colors[
                                        detailsColors[
                                            index < 2 ? index : 2
                                        ]
                                    ]
                                )}
                            >
                                <span className={styles.insightTitle}>
                                    {section}
                                </span>
                                <span className={styles.insightBody}>
                                    {project[section]}
                                </span>
                            </div>
                        )
                )}
            </div>
            <div className={styles.status}>{status}</div>
        </div>
    );
};

export default ProjectDetails;
