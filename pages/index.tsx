import { FC } from 'react';
import Home from '../components/home/Home';
import PageLayout from '../components/layout/PageLayout';

const HomePage: FC = () => (
    <PageLayout
        pageTitle="Zaira Stefani Vallejo • Brand Strategist"
        pageDescription="Zaira Stefani Vallejo is a brand strategist with ecommerce and DTC experience. The intersection of culture and commerce insights are the heart of her work."
    >
        <Home />
    </PageLayout>
);

export default HomePage;
