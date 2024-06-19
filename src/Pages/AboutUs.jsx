
import { Helmet } from 'react-helmet-async';
import cozy from '../assets/A cool and simple logo for a hotel name is CozyNest with golden background.mp4';
const AboutUs = () => {
    return (
        <div className="dark:bg-gray-100 dark:text-gray-900 my-4">
            <Helmet>
                <title>CozyNest|AboutUs</title>
            </Helmet>
            <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
                <div
                    className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4"
                ><video
                    className=""
                    autoPlay
                    muted
                    loop
                >
                        <source src={cozy} type="video/mp4" />
                        
                    </video></div>

                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                    <div className="flex justify-start">
                        <span className="px-2 py-1 md:text-4xl text-2xl rounded-full dark:bg-violet-600 dark:text-gray-50">Experience Warmth and Hospitality</span>
                    </div>
                    <h1 className="text-3xl font-semibold"></h1>
                    <p className="flex-1 pt-2 text-[#c19d68] ">Welcome to Cozy Nest, where comfort meets tranquility. Discover your perfect getaway in our collection of inviting accommodations designed to make you feel right at home. Whether you`re seeking a peaceful retreat for relaxation or an adventurous escape, Cozy Nest offers a range of cozy spaces to suit every traveler. Nestle into our plush rooms, unwind in serene surroundings, and indulge in warm hospitality. From scenic views to personalized amenities, your stay at Cozy Nest promises to create lasting memories. Embrace the warmth of our hospitality and experience true relaxation at Cozy Nest.</p>
                    
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-600">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                            </svg>
                            <span className="self-center text-sm">by Mehrish,</span>
                            <span className="self-center text-sm">CEO of CozyNest</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;