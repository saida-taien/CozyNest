import { Link } from 'react-router-dom';
import './Animation.css'
const Room = ({ room }) => {
    // console.log(room)
    return (
        <div className="max-w-xl p-6 rounded-md shadow-sm mb-2 shadow-[#c19d68]  text-[#c19d68]" data-aos="zoom-in" data-aos-duration="2000">
            <img src={room.image_url} alt="" className="object-cover object-center w-full rounded-md h-72 " />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide text-white">{room.type}</h2>
                <span className="block text-xs font-medium tracking-widest uppercase ">{room.status}</span>
            </div>
            <p className="dark:text-gray-800">{room.description}</p>
            <div className="flex items-center justify-center my-5">
                <Link to={`/roomDetails/${room.id}`}><button type="button" className="px-8 py-3 font-semibold border rounded w-full border-[#c19d68]  text-white">View Property</button></Link>
            </div>
        </div>
    );
};

export default Room;