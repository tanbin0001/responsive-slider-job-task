
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import { Navigation } from 'swiper/modules';
import ProductItem from './ProductItem';

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className='lg:mx-20'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          rewind={true}
          navigation={{
            nextEl: isHovered ? '.swiper-button-next' : null,
            prevEl: isHovered ? '.swiper-button-prev' : null,
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ position: 'relative' }}
        >
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-10 mt-20 mx-5">
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91qgSxzWocL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />

              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71yzmNNMC1L._AC_SL1500_.jpg"
                discount=""
                title="SteelSeries Apex Pro TKL Wireless HyperMagnetic"
                price="$200"
                previousPrice=""
                description="NFINITELY CUSTOMIZABLE, UNTETHERED SPEED with OmniPoint 2.0 Adjustable HyperMagnetic switches"
              />

              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71qBJja5WIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-20%"
                title="Golf's Best On Course Tracking System Featuring The First-Ever A.I. Powered GPS"
                price="$159"
                previousPrice="$199.99"
                description="The new GEN3+ system includes 14 sensors (one for every club in your bag), featuring: 13 new, ultra-light sensors with long lasting battery and power."
              />

              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61POLvv99xS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-50%"
                title="Garmin 010-02356-00 Approach R10"
                price="$298.99"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-10 mt-20 mx-5">
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41iJjX8KX0L._AC_SL1200_.jpg"
                discount="-27%"
                title="Optoma GT2000HDR Compact Short Throw Laser"
                price="$949"
                previousPrice="$1299"
                description=" DuraCore laser light technology eliminates lamp and filter replacements for "

              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815uX7wkOZS._AC_SL1500_.jpg"
                discount=""
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51NPaIorJiL._AC_SL1000_.jpg"
                discount=""
                title="TP-Link AX1800 WiFi 6 Router (Archer AX21) "
                price="$74"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71MCoiRtMwL._AC_SL1500_.jpg"
                discount=""
                title="ASUS ROG Strix NVIDIA GeForce RTX™™"
                price="$1049"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />

            </div>
          </SwiperSlide>

        </Swiper>
        <div className='flex justify-center items-center'>
          <div
            className={`swiper-button-prev    `}
            style={{
              opacity: isHovered ? 1 : 0,

              top: '100%',
              transition: 'opacity 0.3s',


              borderRadius: '50%',
              width: '50px',
              height: '50px',

              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

          </div>
          <div
            className="swiper-button-next"
            style={{
              opacity: isHovered ? 1 : 0,


              transition: 'opacity 0.3s',
              top: '100%',

              borderRadius: '50%',
              width: '50px',
              height: '50px',

              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

        </div>

      </div>
    </>
  );
};

export default Slider;
