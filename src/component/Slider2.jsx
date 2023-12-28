 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../component/Slider2.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Slider2 = () => {
    return (
        <div className="mt-10  grid lg:grid-cols-2">
        <div>
            <img src="https://www.creativehatti.com/wp-content/uploads/edd/2021/04/Delivery-services-free-delivery-on-all-orders-banner-design-06-large.jpg" alt="" />
        </div>
        <div >
<h1 className="text-center font-bold text-2xl">BEST SELLERS</h1>
<div className='slider2-container'>
<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     
 
</div>
        </div>
    </div>
    );
};

export default Slider2;