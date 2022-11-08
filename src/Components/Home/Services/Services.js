import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    const {img , name , description , price ,_id} = service
    return (
        <div className="card w-auto bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Loading" />
 
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <button className="btn btn-ghost border-red-500">{price}</button>
   <div className='ml-1'>
   <button className="btn btn-primary"><Link to={`/services/${_id}`}>All</Link></button>
   <Link to={`/service/${_id}`} className="btn btn-primary ml-1">Details</Link>
   </div>
    </div>
  </div>
</div>
    );
};

export default Services;