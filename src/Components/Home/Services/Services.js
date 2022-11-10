import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import UseTitle from '../../CustomHooks/UseTitle';


const Services = ({service}) => {
  UseTitle('Services')
    const {img , name , description , price ,_id} = service

    const handleMorebtn =(description) => {
      toast(description, {
        position: "top-center",
       
        autoClose: 19000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }



    return (
        <div className="card w-auto bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Loading" />
 
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.length > 200 ? 
   <> {description.slice(0,200)} <span onClick={()=>handleMorebtn(description)}> ...more </span> </>
     :
     <>{description}</>
  }</p>
    <div className="card-actions justify-between">
      <button className="btn btn-ghost border-red-500">{price}</button>
   <div className='ml-1'>
   <button className="btn btn-primary"><Link to={`/services/${_id}`}>All</Link></button>
   <Link to={`/service/${_id}`} className="btn btn-primary ml-1">Details</Link>
   </div>
    </div>
  </div>
  <Toaster />
  
</div>
    );
};

export default Services;