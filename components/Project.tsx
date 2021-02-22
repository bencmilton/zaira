import { FC } from 'react';
import { Parallax } from 'react-parallax';
import classNames from 'classnames';

import styles from './Project.module.css';

type Props = {
    className: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    insight: string;
    outcome: string;
};

const Project: FC<Props> = ({ className, title, subtitle, imageUrl, insight, outcome }) => (
    <Parallax blur={10} className={className} strength={200}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className={styles.stuff}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl} width={580} height={427} />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.insights}>
                        <span className={styles.bold}>Insight:</span>
                        <span>{insight}</span>
                    </div>
                    <div className={styles.insights}>
                        <span className={styles.bold}>Outcome:</span>
                        <span>{outcome}</span>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default Project;
