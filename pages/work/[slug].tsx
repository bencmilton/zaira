import { FC } from 'react';
import { useRouter } from 'next/router';

import { ALL_PROJECTS } from '../../components/projectsConfig';
import PageLayout from '../../components/PageLayout';
import WorkDetails from '../../components/WorkDetails';

const WorkDetailsPage: FC = () => {
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
            pageDescription={project.description}
        >
            <WorkDetails project={project} />
        </PageLayout>
    );
};

export default WorkDetailsPage;
