import { FC, useRef } from 'react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Scrollbar,
    A11y,
    HashNavigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Project from './Project';
import { ALL_PROJECTS } from './projectsConfig';
import styles from './styles/ProjectSwiper.module.css';

SwiperCore.use([
    Keyboard,
    Mousewheel,
    Scrollbar,
    HashNavigation,
    A11y,
]);

const ProjectSwiper: FC = () => {
    const mySwiper = useRef(null);

    return (
        <article className={styles.container}>
            <div className={styles.sliderWrapper}>
                <Swiper
                    className={styles.swiperContainer}
                    direction="vertical"
                    slidesPerView={1}
                    onSwiper={swiper => (mySwiper.current = swiper)}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    hashNavigation={{
                        watchState: true,
                        replaceState: true,
                    }}
                    mousewheel
                    simulateTouch
                >
                    {ALL_PROJECTS.map((project, index) => (
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
