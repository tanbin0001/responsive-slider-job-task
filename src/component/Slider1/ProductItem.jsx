/* eslint-disable react/prop-types */
// ProductItem.js

import { useState } from "react";

 

const ProductItem = ({ imageSrc, discount, title, price, description,previousPrice }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="lg:flex      py-5 lg:justify-around items-center lg:h-96"   onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className="lg:w-[500px]   relative">
        <img className="hover:opacity-65  mx-auto lg:p-10" src={imageSrc} alt="" />
        {discount && (
          <div
            style={{
              position: 'absolute',
              top: '9px',
              left: '30px',
              backgroundColor: '#FF8322',
              borderRadius: '100%',
              height: '50px',
              padding: '5px',
              color: 'white',
              paddingTop: '10px',
            }}
          >
            {discount}
          </div>
        )}
      </div>
      <div className="lg:text-start lg:w-[500px] space-y-5 mx-10  ">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
        </div>
        <h3 className="font-bold text-1xl">{title}</h3>
<div className='flex    w-full  justify-center lg:justify-start '>
<h2 className="font-bold text-2xl text-orange-500">{price}</h2>
<h2 className='ml-10 text-gray-400 font-bold'><s>{previousPrice}</s></h2>
</div>
        <p className="text-gray-500">{description}</p>
        <button className={`btn rounded-full bg-gray-500 text-white ${isHovered ? 'visible' : 'hidden'} `}>Add to cart</button>       
       </div>
    </div>
  );
};

export default ProductItem;
