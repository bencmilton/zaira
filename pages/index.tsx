import { FC } from 'react';
import Main from '../components/Main';
import PageLayout from '../components/PageLayout';

const Home: FC = () => (
    <PageLayout
        pageTitle="Zaira Stefani Vallejo • Brand Strategist"
        pageDescription="Zaira Stefani Vallejo is a brand strategist with ecommerce and DTC experience. The intersection of culture and commerce insights are the heart of her work."
    >
        <Main />
    </PageLayout>
);

export default Home;
