import { FC, ReactElement } from 'react';
import { Parallax } from 'react-parallax';
import classNames from 'classnames';

import styles from './Project.module.css';

type Props = {
    color: string;
    fontColor?: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    insight: string;
    action: string;
    outcome?: string | ReactElement;
    recommendation?: string | ReactElement;
};

const Project: FC<Props> = ({
    color,
    fontColor,
    title,
    subtitle,
    imageUrl,
    insight,
    action,
    outcome,
    recommendation,
}) => (
    <Parallax blur={10} className={styles[color]} strength={200}>
        <div
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
                    <img src={imageUrl} width={580} height={427} />
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
                        </div>
                    )}
                    {recommendation && (
                        <div className={styles.insights}>
                            <span className={styles.bold}>Recommendation:</span>
                            <span>{recommendation}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Parallax>
);

export default Project;
