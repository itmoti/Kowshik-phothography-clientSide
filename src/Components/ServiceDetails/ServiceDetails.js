import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseTitle from '../CustomHooks/UseTitle';

const ServiceDetails = () => {
    UseTitle('Service Details')
    const params = useParams();
    const id = params.id

     const [service , setService] = useState()
     useEffect( () => {
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setService(data)
        })
     }
        ,[])
      

    return (
        <div className='grid grid-cols-2'>
         
   
        <div className="card w-2/3 mx-auto bg-base-100 shadow-xl image-full">
  <figure><img src={service?.img} alt="Loading" />
 
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service?.name}</h2>
    <p>{service?.description}</p>
    <div className="card-actions justify-between">
      <button className="btn btn-ghost border-red-500">{service?.price}</button>
   <div className='ml-1'>
   </div>
    </div>
  </div>

   
           </div>
           <div className='w-2/3 mx-auto'>
            {/* show all reviews container */}
            <div className='border border-red-300 p-3'> 
               <div className='flex '><img src='img' alt='loading'/><h2 className='font-bold ml-1 '>Motiar Rahman </h2></div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex quae obcaecati quas nam sit commodi reprehenderit tempore error. Nostrum.</p>

               
            </div>
            <form></form>
           </div>
        </div>
    );
};

export default ServiceDetails;