import building from '../assets/Building.jpeg';
import area from '../assets/Area.jpeg';
import roof from '../assets/roof.jpeg';
import buffet from '../assets/buffet.jpeg';
import swimming from '../assets/swimming.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
             
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination , Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={building} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={area} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={buffet} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swimming} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={roof} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/QD5TSts/Spacious-Urban-Loft.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9yG50Bk/Family-Home-with-Garden.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/NNQJwx7/Luxury-Penthouse.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jz7yCYN/Beachfront-Condo.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/VwbjQ6k/Mountain-View.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/FwjY3S7/Riverside-Cottage.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/PC5XBnK/2376477d-d87b-4cef-8c7b-ce4815d1c647.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;