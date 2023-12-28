 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
 
    return (
        <div>
         
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src="https://icms-image.slatic.net/images/ims-web/402bc0c7-3eed-494c-a43c-1f31b4151cd1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://icms-image.slatic.net/images/ims-web/77e3efce-1348-4997-8e14-85e41a8a7b64.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://icms-image.slatic.net/images/ims-web/b96579bb-84d7-488b-b565-a4d8ab89d7dd.jpg" />
        </SwiperSlide>
      </Swiper>
      
    
        </div>
    );
};

export default Banner;