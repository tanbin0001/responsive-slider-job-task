 
import  { useState } from 'react';
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
      <div
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
                price="$298.99"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
             
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91qgSxzWocL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
             
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91qgSxzWocL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
             
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91qgSxzWocL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                previousPrice="$70.22"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-10 mt-20 mx-5">
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815uX7wkOZS._AC_SL1500_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815uX7wkOZS._AC_SL1500_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815uX7wkOZS._AC_SL1500_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
                description="Powerful Productivity: 11th Generation Intel Core i3-1115G4 Dual Core processor."
              />
              <ProductItem
                imageSrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815uX7wkOZS._AC_SL1500_.jpg"
                discount="-50%"
                title="Acer Aspire 5 A515-56-347N Slim Laptop - 15.6"
                price="$298.99"
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
            
            // top: '40%',
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
