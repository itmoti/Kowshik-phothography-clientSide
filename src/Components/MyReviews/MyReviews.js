import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyReviews = () => {
    UseTitle('My Reviews')
    const { user } = useContext(UserContext)
    const [reviews, setReviews] = useState([])
    //    edit button 
 
    // delete button 
    const handleDeleteBtn = (id) => {
        fetch(` https://kowshik-photography-serverside.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast('Successfully Deleted');
                }
            })

    }



    useEffect(() => {
        fetch(`https://kowshik-photography-serverside.vercel.app/myreviews/${user.email}`, {
            headers: {
                authorizaton: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email ])

    console.log(reviews)
    return (
        <div className='text-center'>

            <h1 className='text-5xl font-extrabold underline italic '>My reviews</h1>

            {
                reviews.length ?
                    reviews?.map(rev => <div className='card w-96 mx-auto my-3 bg-base-100 p-3 shadow-xl ' key={rev._id}>
                        <h1 className='card-title'> Service Name : Unavailabe</h1>
                        <p><span className='font-bold'>Review : </span> {rev.review}jkjk</p>
                        <button className='btn btn-outline btn-sm' ><Link to={`/reviews/edit/${rev._id}`}>Edit</Link></button>
                        <button className='btn btn-outline btn-error btn-sm' onClick={() => handleDeleteBtn(rev._id)}>Delete</button>
                    </div>)

                    :
                    'No reviews found'
            }
            <Toaster />

        </div>
    );
};

export default MyReviews;