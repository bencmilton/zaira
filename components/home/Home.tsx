import { FC } from 'react';

import Link from '../shared/Link';
import ResponsiveImage from '../shared/ResponsiveImage';
import { emailUrl, resumeUrl } from '../shared/links';
import TheWoman from './TheWoman';
import TheWork from './TheWork';
import styles from './styles/Home.module.css';

const Main: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <p>
                ¡Saludos! I’m{' '}
                <span className={styles.name}>
                    Zaira Stefani Vallejo
                </span>{' '}
                - a strategist and brand marketer interested in the
                intersection of culture and commerce. Specifically,
                how global trends and the human need for
                self-actualization shape the 5 W’s (and 1 H) of
                spending behavior and our relationship with companies,
                small and large.
            </p>
            <p>
                Fact: breaking old habits is hard. In order to be
                game-changing, you have to get out of your comfort
                zone. I work with businesses to do just that - push
                them to color outside of the lines to become enviable,
                often-copied brands. Why? Because strong brand equity
                adds real bottomline value - and better brands have
                more fun!
            </p>
        </header>
        <div className={styles.imageContainer}>
            <picture>
                <source
                    media="(max-width: 767px)"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet="
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_1_1,c_fill,g_auto__c_scale,w_480.jpg 480w,
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_1_1,c_fill,g_auto__c_scale,w_1080.jpg 1080w"
                />
                <source
                    media="(min-width: 768px) and (max-width: 991px)"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    srcSet="
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_4_3,c_fill,g_auto__c_scale,w_768.jpg 768w,
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_4_3,c_fill,g_auto__c_scale,w_1440.jpg 1440w"
                />
                <source
                    media="(min-width: 992px) and (max-width: 1199px)"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    srcSet="
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_16_9,c_fill,g_auto__c_scale,w_992.jpg 992w,
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_ar_16_9,c_fill,g_auto__c_scale,w_1920.jpg 1920w"
                />
                <img
                    sizes="(max-width: 2000px) 100vw, 2000px"
                    srcSet="
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_c_scale,w_1200.jpg 1200w,
/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_c_scale,w_2000.jpg 2000w"
                    src="/ZSV_Strategy_Process_Img/ZSV_Strategy_Process_Chart.001_diazfg_c_scale,w_2000.jpg"
                    className={styles.image}
                    alt="Zaira's strategy process chart"
                />
            </picture>
        </div>
        <TheWoman />
        <TheWork />
        <div className={styles.divider}>
            "Lorem ipsum dolor sit amet" -- Puff
        </div>
        <div className={styles.substack}>
            <Link
                underline={false}
                href="https://perpetualplay.substack.com/"
            >
                Substack
            </Link>
        </div>
        <div className={styles.resume}>
            <Link underline={false} href={resumeUrl}>
                Resume
            </Link>
        </div>
        <div className={styles.contact}>
            <Link underline={false} href={emailUrl}>
                Contact Zaira
            </Link>
        </div>
    </article>
);

export default Main;
