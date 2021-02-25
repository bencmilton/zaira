import { FC } from 'react';

import PageLayout from '../components/PageLayout';
import ProjectSwiper from '../components/ProjectSwiper';

const ProjectsPage: FC = () => (
    <PageLayout
        showFooter={false}
        pageTitle="Zaira Stefani Vallejo -- Projects"
    >
        <ProjectSwiper />
    </PageLayout>
);

export default ProjectsPage;
