import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import './Animation.css'
const RoomDetails = () => {
    const hotel = useLoaderData();
    // const { rooms } = hotel;
    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState([]);

    useEffect(() => {
        const selectedRoom = hotel.rooms.find(room => room.id === id);
        if (selectedRoom) {
            setRoomDetails(selectedRoom);
        } else {
            setRoomDetails(null); // Reset roomDetails if no matching room found
        }
    }, [hotel.rooms, id]);

    console.log(roomDetails.facilities);
    return (
        <section className="dark:bg-gray-100 ">
            <Helmet>
                <title>CozyNest|EstatesDetails</title>
            </Helmet>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img data-aos="flip-right" data-aos-duration="2000" src={roomDetails.image_url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{roomDetails.type}</h3>
                        <span className="text-xs dark:text-gray-600">Area : {roomDetails.area}</span>
                        <p className="text-[#c19d68]">{roomDetails.description}</p>
                        <p className="animate__animated animate__lightSpeedInRight"><strong className="text-[#c19d68] ">Segment</strong> : {roomDetails.segment_name}</p>
                        <p className="animate__animated animate__lightSpeedInRight"><strong className="text-[#c19d68]">Price</strong> : {roomDetails.price_per_night}$</p>
                        <p className="animate__animated animate__lightSpeedInRight"><strong className="text-[#c19d68]">Location</strong> : {roomDetails.location}</p>
                        <h3 className="text-lg font-bold mb-2">Facilities</h3>
                        <ul className="list-disc pl-6">
                            {roomDetails.facilities?.map((facility, index) => (
                                <li key={index} className="mb-2 text-[#c19d68] animate__animated animate__lightSpeedInRight">{facility}</li>
                            ))}
                        </ul>
                        
                    </div>
                </a>

            </div>
        </section>
    );
};

export default RoomDetails;