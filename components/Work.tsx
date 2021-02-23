import { FC } from 'react';

import Link from './Link';
import styles from './Work.module.css';

const Work: FC = () => (
    <div className={styles.container}>
        <div className={styles.header}>THE WORK</div>
        <div className={styles.section}>
            A pre-launch grocery CPG tapping an emerging demographic
            during a digital acceleration.{' '}
            <Link
                openNewWindow={false}
                className={styles.link}
                href="/work"
            >
                See More.
            </Link>
            <img
                className={styles.image}
                src="./the_work_2-406w.png"
                width={406}
                height={228}
                alt="A mood board for a CPG brand including blue, pink and brown tones, food photography, and a Mexican inspired graphic."
            />
        </div>
        <div className={styles.section}>
            Recommendations for a DTC to win market share & transform
            their business to become a legacy brand.{' '}
            <Link
                openNewWindow={false}
                className={styles.link}
                href="/work"
            >
                See More.
            </Link>
            <img
                className={styles.image}
                src="./the_work_1-406w.png"
                width={406}
                height={228}
                alt="A presentation slide describing American consumer shopping behavior with lifestyle images from home company Snowe."
            />
        </div>
        <div className={styles.section}>
            Innovating the retail experience to bring a collective of
            brands into the consumer’s home.{' '}
            <Link
                openNewWindow={false}
                className={styles.link}
                href="/work"
            >
                See More.
            </Link>
            <img
                className={styles.image}
                src="./the_work_3-406w.png"
                width={406}
                height={228}
                alt="A living room decorated with cream, black, and brown tone furniture, framed by windows and natural light."
            />
        </div>
    </div>
);

export default Work;
