import { FC } from 'react';

import Project from './Project';
import Link from './Link';
import styles from './Projects.module.css';

const PROJECTS = [
    {
        title: 'DIFFERENTIATING A DTC BRAND',
        subtitle:
            'Using Scott Galloway’s (NYU Stern, Section4) strategy frameworks, developed recommendations for an ecommerce company.',
        color: 'blue',
        insight:
            'With Covid-19 accelerating a focus on home and consumer confidence growing online, Snowe can leverage their whole-home offering to establish category dominance.',
        action:
            'Conducted a brand audit, created a brand identity model, and pulled market research and consumer insights to craft actionable recommendations.',
        imageUrl: '/70-Pine_Living-Room-1280w.webp',
        recommendation: (
            <span>
                Snowe can win by building community, adopting social commerce, and developing a
                subscription model, owned and in partnership, that creates a recurring revenue
                stream to grow brand equity and business bottomline.
                <p>
                    <i>Case Study</i>
                </p>
            </span>
        ),
    },
    {
        title: 'LAUNCHING A GROCERY CPG',
        subtitle:
            'Bringing a brand to life from brand foundation to go to market strategy and future growth plan.',
        color: 'yellow',
        fontColor: 'black',
        insight:
            'Consumers have adopted buying food online and DTC, and are keen to discover new products.',
        action:
            'Using market research, consumer insights, and cultural trends, created brand guidelines, informed brand identity system, and product strategy to bring idea to fruition.',
        outcome: (
            <span>
                Developed an elevated CPG brand targeted to a niche ethnic demographic. Along with a
                product line of high-quality foods, took a holistic approach to create a brand that
                consumers can learn and grow with.
                <p>
                    <i>Launching Soon</i>
                </p>
            </span>
        ),
        imageUrl: '/CPG_Grocery_GTM.webp',
    },
    {
        title: 'INNOVATING BRICK & MORTAR',
        subtitle:
            'An immersive retail experience delivered within a luxury residential high-rise in Manhattan.',
        color: 'green',
        insight:
            'Partnering with real estate developers to stage units as shoppable showrooms, Snowe could reach consumers as close to home as possible, making it more accessible than ever to see and shop for their apartment.',
        action:
            'Designed, installed and launched an aspirational Snowe home. Negotiated key brand partnerships whose involvement increased social visibility. ',
        outcome: (
            <span>
                Launched to industry insiders, held exclusive shopping appointments, and generated
                interest from real estate developers to replicate the idea in other markets.{' '}
                <Link href="https://businessofhome.com/articles/snowe-and-industry-west-want-to-meet-clients-where-they-are-at-home">
                    Press
                </Link>{' '}
                & <Link href="https://www.snowepenthousewest.com/">Microsite</Link>.
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/70-Pine_Living-Room-1280w.webp',
    },
    {
        title: 'TARGETING B2B2C',
        subtitle:
            'Reimagined Snowe’s Trade program to be a competitive and compelling offering for design professionals.',
        color: 'black',
        insight: 'Design professionals were an untapped',
        action:
            'Create an aspirational Snowe home, from design to installation, while negotiating key brand partnerships to increase outreach and visibility.',
        outcome: (
            <span>
                Saw a 140% increase in YoY traffic and 2x average time on site.
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/70-Pine_Living-Room-1280w.webp',
    },
    {
        title: 'BUILDING AN OMNICHANNEL STRATEGY',
        subtitle:
            'Developed the marketing strategy for a luxury wedding vendor, with a focus on digital.',
        color: 'red',
        fontColor: 'black',
        insight:
            'By partnering with real estate developers to a stage units as a shoppable showroom, Snowe could reach consumers as close to home as possible, making it more accessible than ever to see and shop for their apartment.',
        action:
            'Create an aspirational Snowe home, from design to installation, while negotiating key brand partnerships to increase outreach and visibility.',
        outcome: (
            <span>
                525% growth in Instagram followers over 3 years
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/70-Pine_Living-Room-1280w.webp',
    },
];

const Projects: FC = () => (
    <article className={styles.container}>
        <header className={styles.header}>
            <h1>THE WORK</h1>
        </header>
        {PROJECTS.map(project => (
            <Project {...project} />
        ))}
    </article>
);

export default Projects;
