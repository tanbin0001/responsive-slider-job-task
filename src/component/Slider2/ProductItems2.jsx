/* eslint-disable react/prop-types */
// ProductItem.js

 
 

const ProductItems2 = ({ imageSrc, title, price,previousPrice }) => {
 
  return (
    <div className="lg:flex   my-5   lg:justify-around items-center   "   
    >
      <div className=" relative">
        <img className="  lg:p-10 w-60 mx-auto" src={imageSrc} alt="" />
       
      </div>
      <div className="lg:text-start space-y-2 mx-10 ">
        <div className="rating  text-sm">
          <input type="radio" name="rating-2" className="mask mask-star-2  bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
        </div>
        <h3 className="font-bold text-1xl">{title}</h3>
<div className='flex  w-full  justify-center lg:justify-start  '>
<h2 className="font-bold text-2xl text-orange-500">{price}</h2>
<h2 className='ml-10 text-gray-400 font-bold'><s>{previousPrice}</s></h2>
</div>
         
      </div>
    </div>
  );
};

export default ProductItems2;
