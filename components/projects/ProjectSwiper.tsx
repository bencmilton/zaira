import { FC, useRef } from 'react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    A11y,
    HashNavigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useLogoColor } from '../layout/PageLayout';
import Project from './Project';
import { ALL_PROJECTS } from './projectsConfig';
import styles from './styles/ProjectSwiper.module.css';

SwiperCore.use([Keyboard, Mousewheel, HashNavigation, A11y]);

const ProjectSwiper: FC = () => {
    const { setLogoColor } = useLogoColor();
    const mySwiper = useRef(null);

    return (
        <article className={styles.container}>
            <div className={styles.sliderWrapper}>
                <Swiper
                    className={styles.swiperContainer}
                    direction="vertical"
                    slidesPerView={1}
                    onSwiper={swiper => (mySwiper.current = swiper)}
                    hashNavigation={{
                        watchState: true,
                        replaceState: true,
                    }}
                    preventClicks={false}
                    preventClicksPropagation={false}
                    mousewheel={{
                        sensitivity: 0.5,
                    }}
                    onSlideChange={swiper => {
                        setLogoColor(
                            ALL_PROJECTS[swiper.activeIndex]
                                .logoColor || 'red'
                        );
                    }}
                >
                    {ALL_PROJECTS.map(project => (
                        <SwiperSlide
                            key={project.slug}
                            className={styles.swiperSlide}
                            data-hash={project.slug}
                        >
                            <Project {...project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </article>
    );
};

export default ProjectSwiper;
