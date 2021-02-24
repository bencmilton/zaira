import { FC } from 'react';

import Project from './Project';
import Link from './Link';
import styles from './styles/Projects.module.css';

export const PROJECTS = [
    {
        title: 'DIFFERENTIATING A DTC BRAND',
        subtitle:
            'Using Scott Galloway’s (NYU Stern, Section4) strategy frameworks, developed recommendations for an ecommerce company.',
        color: 'blue',
        insight:
            'With Covid-19 accelerating a focus on home and consumer confidence growing online, Snowe can leverage their whole-home offering to establish category dominance.',
        action:
            'Conducted a brand audit, created a brand identity model, and pulled market research and consumer insights to craft actionable recommendations.',
        imageUrl: '/the_work_1-1220w.png',
        imageAlt:
            'A presentation slide describing American consumer shopping behavior with lifestyle images from home company Snowe.',
        recommendation: (
            <span>
                Snowe can win by building community, adopting social
                commerce, and developing a subscription model, owned
                and in partnership, that creates a recurring revenue
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
        color: 'green',
        insight:
            'Consumers have adopted buying food online and DTC, and are keen to discover new products.',
        action:
            'Using market research, consumer insights, and cultural trends, created brand guidelines, informed brand identity system, and product strategy to bring idea to fruition.',
        outcome: (
            <span>
                Developed an elevated CPG brand targeted to a niche
                ethnic demographic. Along with a product line of
                high-quality foods, took a holistic approach to create
                a brand that consumers can learn and grow with.
                <p>
                    <i>Launching Soon</i>
                </p>
            </span>
        ),
        imageUrl: '/the_work_2-1220w.png',
        imageAlt:
            'A mood board for a CPG brand including blue, pink and brown tones, food photography, and a Mexican inspired graphic.',
    },
    {
        title: 'INNOVATING BRICK & MORTAR',
        subtitle:
            'An immersive retail experience delivered within a luxury residential high-rise in Manhattan.',
        color: 'yellow',
        fontColor: 'black',
        insight:
            'Partnering with real estate developers to stage units as shoppable showrooms, Snowe could reach consumers as close to home as possible, making it more accessible than ever to see and shop for their apartment.',
        action:
            'Designed, installed and launched an aspirational Snowe home. Negotiated key brand partnerships whose involvement increased social visibility. ',
        outcome: (
            <span>
                Launched to industry insiders, held exclusive shopping
                appointments, and generated interest from real estate
                developers to replicate the idea in other markets.{' '}
                <Link href="https://businessofhome.com/articles/snowe-and-industry-west-want-to-meet-clients-where-they-are-at-home">
                    Press
                </Link>{' '}
                &{' '}
                <Link href="https://www.snowepenthousewest.com/">
                    Microsite
                </Link>
                .
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/the_work_3-1220w.png',
        imageAlt:
            'A living room decorated with cream, black, and brown tone furniture, framed by windows and natural light.',
    },
    {
        title: 'TARGETING B2B2C',
        subtitle:
            'Reimagined Snowe’s Trade program to be a competitive and compelling offering for design professionals.',
        color: 'red',
        fontColor: 'black',
        insight:
            'Design professionals were an untapped customer segment who could deliver massive value through higher AOV, network effects, and design-adjacent associations.',
        action:
            'Led customer interviews and leveraged historical data along with competitive market research to create a program with compelling incentives and a high-touch customer experience.',
        outcome: (
            <span>
                Saw a 140% increase in YoY traffic and 2x average time
                on site. Participated in the Architectural Digest
                Design Show. Saw a steep increase in new account
                creation.
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/the_work_4-1220w.png',
        imageAlt:
            'A website landing page sharing information for a B2B account sign up.',
    },
    {
        title: 'BUILDING AN OMNICHANNEL STRATEGY',
        subtitle:
            'Developed the marketing strategy for a B2B luxury wedding vendor, with a focus on digital.',
        color: 'black',
        insight:
            'Nüage Designs could become a robust resource for B2B professionals, providing high quality content and leveraging partnerships to increase visibility and establish thought leadership to organically grow the business.',
        action:
            'Developed content strategy and calendar, sole copywriter for blog, email, and social, negotiated best-in-class partnerships, developed proprietary design tools, expanded brand architecture.',
        outcome: (
            <span>
                Saw customer growth, increased customer LTV, 5x growth
                in Instagram followers, secured partnerships with key
                media partners (The Knot), and created a consistent
                marketing strategy.
                <p>
                    <i>Executed</i>
                </p>
            </span>
        ),
        imageUrl: '/the_work_5-1220w.png',
        imageAlt:
            'An inspirational wedding table and lounge set up in wood and cream tones with a variety of chairs and furniture and a hanging driftwood accent.',
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
