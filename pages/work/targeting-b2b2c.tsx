import { FC } from 'react';

import { ALL_PROJECTS } from '../../components/projects/projectsConfig';
import PageLayout from '../../components/layout/PageLayout';
import ProjectDetails from '../../components/projects/ProjectDetails';

const ProjectDetailsPage: FC = () => {
    const project = ALL_PROJECTS.find(
        proj => proj.slug === 'targeting-b2b2c'
    );

    return (
        <PageLayout
            pageTitle={`Zaira Stefani Vallejo • ${project.title}`}
            pageDescription={project.description || project.subtitle}
        >
            <ProjectDetails project={project} />
        </PageLayout>
    );
};

export default ProjectDetailsPage;
