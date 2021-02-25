import { FC, useEffect, useRef } from 'react';
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
import styles from './styles/Projects.module.css';

SwiperCore.use([
    Keyboard,
    Mousewheel,
    Scrollbar,
    HashNavigation,
    A11y,
]);

const ProjectSwiper: FC = () => {
    const mySwiper = useRef(null);
    // const params =
    //     typeof window !== 'undefined' &&
    //     new URLSearchParams(window.location.search);
    // const projectParam = params && params.get('project');

    // useEffect(() => {
    //     if (projectParam) {
    //         const el = document.getElementById(projectParam);
    //         el.scrollIntoView(true);
    //     }
    // }, [projectParam]);

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
                            key={project.id}
                            className={styles.swiperSlide}
                            data-hash={project.id}
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
