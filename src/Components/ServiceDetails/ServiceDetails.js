import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../Home/Services/Services';

const ServiceDetails = () => {
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
        <div className='flex justify-around'>
         
   
        <div className="card w-2/4 bg-base-100 shadow-xl image-full">
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
           <div>
             service details
           </div>
        </div>
    );
};

export default ServiceDetails;