 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 import './Slider2.css'

// import required modules
import { Pagination } from 'swiper/modules';
import ProductItems2 from './ProductItems2';


const Slider2 = () => {

  const customPagination = {
    el: '.my-custom-pagination',
    clickable: true,
  };
    return (
        <div className=" lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-4   ">
        <div>
            <img className='mg:w-[300px] mt-20' src="https://www.creativehatti.com/wp-content/uploads/edd/2021/04/Delivery-services-free-delivery-on-all-orders-banner-design-06-large.jpg" alt="" />
        </div>
        <div >
<div className=' '>
 
  
<div className="flex lg:mx-40 my-10 items-center border-b-4  "> {/* New div with flex styling */}
          <h1 className="  border-b-4 border-orange-500 lg:w-96 font-bold text-2xl ">BEST SELLERS</h1>
          <div className="my-custom-pagination flex justify-end"></div>
        </div>
 
<Swiper

        spaceBetween={30}
       
        pagination={customPagination}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div>
         <ProductItems2
             imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91qgSxzWocL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
           
             title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
             price="$298.99"
             previousPrice="$70.22"
           
            />
            <ProductItems2
         imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71MCoiRtMwL._AC_SL1500_.jpg"
         discount=""
         title="ASUS ROG Strix NVIDIA GeForce RTX™™"
         price="$1049"
            />
            <ProductItems2
       imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51NPaIorJiL._AC_SL1000_.jpg"
       discount=""
       title="TP-Link AX1800 WiFi 6 Router (Archer AX21) "
       price="$74"
            />
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div>
         <ProductItems2
               imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71qBJja5WIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
              
               title="Golf's Best On Course Tracking System  "
               price="$159"
               previousPrice="$199.99"
              
           
            />
            <ProductItems2
             imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71yzmNNMC1L._AC_SL1500_.jpg"
             discount=""
             title="SteelSeries Apex Pro TKL Wireless HyperMagnetic"
             price="$200"
           
            />
         </div>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems2
                 imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41iJjX8KX0L._AC_SL1200_.jpg"
                 discount="-27%"
                 title="Optoma GT2000HDR Compact Short Throw Laser"
                 price="$949"
                 previousPrice="$1299"
           
            />
        </SwiperSlide>
        
      </Swiper>
     
 
</div>
        </div>
    </div>
    );
};

export default Slider2;