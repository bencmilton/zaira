import { FC, ReactElement } from 'react';
import { Parallax } from 'react-parallax';
import classNames from 'classnames';

import styles from './styles/Project.module.css';
import colors from './styles/colors.module.css';

type Props = {
    id: string;
    color: string;
    fontColor?: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    insight: string;
    action: string;
    outcome?: string | ReactElement;
    recommendation?: string | ReactElement;
    status: string;
};

const Project: FC<Props> = ({
    id,
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
}) => (
    <Parallax blur={10} className={colors[color]} strength={200}>
        <div
            id={id}
            className={classNames(styles.container, {
                [styles.fontColorBlack]: fontColor === 'black',
            })}
        >
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        width={610}
                        height={342}
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
                            <span className={styles.bold}>
                                Outcome:
                            </span>
                            <span>{outcome}</span>
                            <div className={styles.status}>
                                {status}
                            </div>
                        </div>
                    )}
                    {recommendation && (
                        <div className={styles.insights}>
                            <span className={styles.bold}>
                                Recommendation:
                            </span>
                            <span>{recommendation}</span>
                            <div className={styles.status}>
                                {status}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Parallax>
);

export default Project;
