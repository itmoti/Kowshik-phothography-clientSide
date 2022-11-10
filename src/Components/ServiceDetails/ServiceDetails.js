import React, { useContext, useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const ServiceDetails = () => {
    const {user} = useContext(UserContext)
 
    UseTitle('Service Details')
    const params = useParams();
    const id = params.id
     const [reviews , setReview] = useState([])
    // show all reviews 
      useEffect(()=> {
         fetch(`http://localhost:5000/allreviews/${id}`)
         .then(res => res.json())
         .then(data => setReview(data))
      },[])

        //   add service review button 
    const handleAddReviewBtn =(event) => {
      event.preventDefault()
      const form = event.target
      const review = form.review.value
      const email = user?.email
      const name = user?.displayName ;
      const userPhoto = user?.photoURL

      const time = new Date()
      const timeInSec =  time.getTime()

  const info = {review ,email ,  time , timeInSec , name , userPhoto  , id    }
      
      fetch(`http://localhost:5000/service/${id}`, {
        method : 'POST' , 
        headers : {
            'content-type' : 'application/json'
        } , 
        body : JSON.stringify(info)

      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
// recent review button
const handleRecentReviewBtn =() => {
        fetch(`http://localhost:5000/serviceByTime/${id}`)
        .then(res => res.json())
        .then(data => setReview(data))
} 
     const [service , setService] = useState()
     useEffect( () => {
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => {
       
            setService(data)
        })
     }
        ,[])
      console.log(reviews)

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
           <div className='w-2/3 mx-auto '>
            {/* show all reviews container */}
            <button onClick={handleRecentReviewBtn} className='btn btn-outline btn-error btn-sm'>Recent Reviews </button>
            {
            reviews.map(review =>  <div className='border border-red-300 p-3 mb-3'> 
            <div className='flex '><img src='img' alt='loading'/><h2 className='font-bold ml-1 text-blue-400 '>{review.name} </h2></div>
            <p><span className='font-bold'>Review : </span>{review.review}</p>

            
         </div> )
         }

           
            {/* add review  */}
            {user?.email ?
             <form onSubmit={handleAddReviewBtn} className='border p-6 mt-5'>
                <label className='block'>Review</label>
                <textarea name='review' className='h-40 w-full' type={''} placeholder={'add you review'} required/>
                <button className="btn btn-active btn-sm btn-ghost" type='submit'>Add Review</button>
             </form> 
             : 
              <p>Please <Link className=' text-blue-600 font-bold' to={'/login'}>Login</Link> to add reviews   </p>}
            
           </div>
        </div>
    );
};

export default ServiceDetails;