import React, { useEffect } from 'react';
import { json, useParams } from 'react-router-dom';

const EditReview = () => {
    const id = useParams().id
    const handleEditReviewBtn = (event) => {
        event.preventDefault()
        const form = event.target
        const review = form.review.value
       const reviewInfo = {review}
         fetch(`http://localhost:5000/reviews/${id}` , {
            method : 'PATCH' ,
            headers : {
                'content-type' : 'application/json'
            } , 
            body : JSON.stringify(reviewInfo)

         })
         .then(res => res.json())
         .then(data => console.log(data))
    }

    return (
        <div className='w-2/4 mx-auto'>
            <form onSubmit={handleEditReviewBtn} className='border p-6 mt-5'>
                <label className='block'>Edit Review</label>
                <textarea name='review' className='h-40 w-full' type={''} placeholder={'add you review'} required />
                <button className="btn btn-active btn-sm btn-ghost" type='submit'>Edit Review</button>
            </form>
        </div>
    );
};

export default EditReview;