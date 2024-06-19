import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import Review from "../Components/Review";
import Amenities from "../Components/Amenities";



const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>CozyNest|Home</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
            <Amenities></Amenities>
            <Review></Review>
        </div>
    );
};

export default Home;