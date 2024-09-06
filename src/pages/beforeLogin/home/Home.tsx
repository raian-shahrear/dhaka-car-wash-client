import HomeContact from './HomeContact';
import HomeFeatured from './HomeFeatured';
import HomeHero from './HomeHero';
import HomeReview from './HomeReview';

const Home = () => {
    return (
        <div className='lg:pt-[74px] min-h-[67vh]'>
            <HomeHero />
            <HomeFeatured />
            <HomeReview />
            <HomeContact />
        </div>
    );
};

export default Home;