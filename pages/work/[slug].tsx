import { FC } from 'react';
import { useRouter } from 'next/router';

import { ALL_PROJECTS } from '../../components/projects/projectsConfig';
import PageLayout from '../../components/layout/PageLayout';
import ProjectDetails from '../../components/projects/ProjectDetails';

const ProjectDetailsPage: FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const project = ALL_PROJECTS.find(proj => proj.slug === slug);

    if (!project) {
        if (typeof window !== 'undefined') {
            window.open('/');
        }
        return null;
    }

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
