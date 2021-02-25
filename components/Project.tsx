import { FC } from 'react';
import classNames from 'classnames';

import Link from './Link';
import styles from './styles/Project.module.css';
import colors from './styles/colors.module.css';

type Props = {
    slug: string;
    color: string;
    fontColor?: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
};

const Project: FC<Props> = ({
    slug,
    color,
    fontColor,
    title,
    subtitle,
    imageUrl,
    imageAlt,
}) => (
    <div
        className={classNames(styles.container, colors[color], {
            [styles.fontColorBlack]: fontColor === 'black',
        })}
    >
        <Link
            nextLink
            underline={false}
            className={styles.link}
            href={`/work/${slug}`}
        >
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={imageUrl}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </Link>
    </div>
);

export default Project;
