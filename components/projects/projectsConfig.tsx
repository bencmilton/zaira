import { ReactElement } from 'react';
import Link from '../shared/Link';

export type ProjectType = {
    slug: string;
    color: Color;
    logoColor: Color;
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    insight: string;
    action: string;
    outcome?: string | ReactElement;
    recommendation?: string | ReactElement;
    status: string;
    description?: string;
    detailsColors: Color[];
};

const DIFFERENTIATING_A_DTC: ProjectType = {
    slug: 'differentiating-a-dtc-brand',
    title: 'DIFFERENTIATING A DTC BRAND',
    subtitle:
        'Using Scott Galloway’s (NYU Stern, Section4) strategy frameworks, developed recommendations for an ecommerce company.',
    color: 'blue',
    logoColor: 'yellow',
    insight:
        'With Covid-19 accelerating a focus on home and consumer confidence growing online, Snowe can leverage their whole-home offering to establish category dominance.',
    action:
        'Conducted a brand audit, created a brand identity model, and pulled market research and consumer insights to craft actionable recommendations.',
    recommendation:
        'Snowe can win by building community, adopting social commerce, and developing a subscription model, owned and in partnership, that creates a recurring revenue stream to grow brand equity and business bottomline.',
    status: 'Case Study',
    imageUrl: '/the_work_1/the_work_1',
    imageAlt:
        'A presentation slide describing American consumer shopping behavior with lifestyle images from home company Snowe.',
    description:
        'Recommendations for a DTC brand to win market share by innovating on their existing business model.',
    detailsColors: ['red', 'yellow', 'green'],
};

const LAUNCHING_A_GROCERY: ProjectType = {
    slug: 'launching-a-grocery-cpg',
    title: 'LAUNCHING A GROCERY CPG',
    subtitle:
        'Bringing a brand to life from brand foundation to go to market strategy and future growth plan.',
    color: 'green',
    logoColor: 'blue',
    insight:
        'Consumers have adopted buying food online and DTC, and are keen to discover new products.',
    action:
        'Using market research, consumer insights, and cultural trends, created brand guidelines, informed brand identity system, and product strategy to bring idea to fruition.',
    outcome:
        'Developed an elevated CPG brand targeted to a niche ethnic demographic. Along with a product line of high-quality foods, took a holistic approach to create a brand that consumers can learn and grow with.',
    status: 'Launching Soon',
    imageUrl: '/the_work_2/the_work_2',
    imageAlt:
        'A mood board for a CPG brand including blue, pink and brown tones, food photography, and a Mexican inspired graphic.',
    description:
        'A pre-launch grocery CPG tapping an emerging demographic during a digital acceleration.',
    detailsColors: ['yellow', 'blue', 'red'],
};

const INNOVATING_BRICK_AND_MORTAR: ProjectType = {
    slug: 'innovating-brick-and-mortar',
    title: 'INNOVATING BRICK & MORTAR',
    subtitle:
        'An immersive retail experience delivered within a luxury residential high-rise in Manhattan.',
    color: 'yellow',
    logoColor: 'green',
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
        </span>
    ),
    status: 'Executed',
    imageUrl: '/the_work_3/the_work_3',
    imageAlt:
        'A living room decorated with cream, black, and brown tone furniture, framed by windows and natural light.',
    description:
        'Innovating the retail experience to bring a collective of brands into the consumer’s home.',
    detailsColors: ['blue', 'green', 'red'],
};

const TARGETING_B2B2C: ProjectType = {
    slug: 'targeting-b2b2c',
    title: 'TARGETING B2B2C',
    subtitle:
        'Reimagined Snowe’s Trade program to be a competitive and compelling offering for design professionals.',
    color: 'red',
    logoColor: 'white',
    insight:
        'Design professionals were an untapped customer segment who could deliver massive value through higher AOV, network effects, and design-adjacent associations.',
    action:
        'Led customer interviews and leveraged historical data along with competitive market research to create a program with compelling incentives and a high-touch customer experience.',
    outcome:
        'Saw a 140% increase in YoY traffic and 2x average time on site. Participated in the Architectural Digest Design Show. Saw a steep increase in new account creation.',
    status: 'Executed',
    imageUrl: '/the_work_4/the_work_4',
    imageAlt:
        'A website landing page sharing information for a B2B account sign up.',
    detailsColors: ['yellow', 'green', 'blue'],
};

const BUILDING_OMNICHANNEL_STRATEGY: ProjectType = {
    slug: 'building-an-omnichannel-strategy',
    title: 'BUILDING AN OMNICHANNEL STRATEGY',
    subtitle:
        'Developed the marketing strategy for a B2B luxury wedding vendor, with a focus on digital.',
    color: 'black',
    logoColor: 'red',
    insight:
        'Nüage Designs could become a robust resource for B2B professionals, providing high quality content and leveraging partnerships to increase visibility and establish thought leadership to organically grow the business.',
    action:
        'Developed content strategy and calendar, sole copywriter for blog, email, and social, negotiated best-in-class partnerships, developed proprietary design tools, expanded brand architecture.',
    outcome:
        'Saw customer growth, increased customer LTV, 5x growth in Instagram followers, secured partnerships with key media partners (The Knot), and created a consistent marketing strategy.',
    status: 'Executed',
    imageUrl: '/the_work_5/the_work_5',
    imageAlt:
        'An inspirational wedding table and lounge set up in wood and cream tones with a variety of chairs and furniture and a hanging driftwood accent.',
    detailsColors: ['green', 'blue', 'red'],
};

// Used in "THE WORK" section on the home page ("/")
export const HOME_PAGE_PROJECTS = [
    LAUNCHING_A_GROCERY,
    DIFFERENTIATING_A_DTC,
    INNOVATING_BRICK_AND_MORTAR,
];

// Used on "THE WORK" page ("/work")
export const ALL_PROJECTS = [
    DIFFERENTIATING_A_DTC,
    LAUNCHING_A_GROCERY,
    INNOVATING_BRICK_AND_MORTAR,
    TARGETING_B2B2C,
    BUILDING_OMNICHANNEL_STRATEGY,
];
