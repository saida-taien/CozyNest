import { useLoaderData } from "react-router-dom";
import Room from "./Room";

const Estates = () => {
    const hotel = useLoaderData();
    const { rooms } = hotel;
    // console.log(rooms);
    return (
        <div className="lg:my-28 my-10">
            
            <div className="p-3  border-b-2 border-[#f1d5aa] rounded-s-2xl lg:mr-80">
                <h1 className="md:text-6xl text-4xl font-bold text-center md:text-center lg:text-start "  >Let`s Explore...</h1>
                <p className="text-end p-6 text-[#f1d5aa] border-b-2 border-white border-dashed rounded-e-2xl lg:ml-20 mb-5" data-aos="flip-down" data-aos-duration="2000">Discover a tranquil retreat at CozyNest Hotel, nestled in the heart of Paradise. Our hotel offers
                    a unique blend of comfort and luxury, with beautifully appointed rooms, world-class amenities,
                    and breathtaking views of the surrounding landscape.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 lg:my-20 my-10">
                {
                    rooms.map((room, idx) => <Room key={idx} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Estates;