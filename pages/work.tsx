import { FC } from 'react';

import PageLayout from '../components/PageLayout';
import ProjectSwiper from '../components/ProjectSwiper';

const ProjectsPage: FC = () => (
    <PageLayout
        showFooter={false}
        pageTitle="Zaira Stefani Vallejo • Work"
        pageDescription="Brand strategy through culture and commerce insights for business success. Real work."
    >
        <ProjectSwiper />
    </PageLayout>
);

export default ProjectsPage;
