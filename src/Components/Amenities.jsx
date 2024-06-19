const Amenities = () => {
    return (
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-[#c19d68] ">
            <div className="container mx-auto mt-3 text-center">
                <h1 className="md:text-4xl text-3xl text-black font-bold">Our Cozy Amenities</h1>
                <p className="text-xl text-gray-600  p-1 pb-10">At Cozy Nest, we`re dedicated to ensuring your stay is as comfortable and enjoyable as possible. Discover our range of amenities designed to enhance your experience:</p>
            </div>
            <div className="mt-3">
                <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Relaxing Spa Retreat</a>
                <p className="mt-2">Indulge in our rejuvenating spa treatments, including massages and facials, to unwind and pamper yourself during your stay.</p>
            </div>
            <div className="mt-3">
                <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Tranquil Poolside Lounge</a>
                <p className="mt-2">Take a dip in our inviting pool or lounge by the poolside, soaking in the peaceful ambiance and basking in the warm sunlight.</p>
            </div>
            <div className="mt-3">
                <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Gourmet Dining Experience</a>
                <p className="mt-2">Savor delicious meals crafted with care by our talented chefs. Whether it`s breakfast in bed or a candlelit dinner, our culinary offerings will delight your taste buds.</p>
            </div>
            <div className="mt-3">
                <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Cozy Lounge Areas</a>
                <p className="mt-2">Curl up with a book or socialize with fellow guests in our cozy lounge spaces, perfect for relaxing after a day of exploring.</p>
            </div>
        </div>
    );
};

export default Amenities;