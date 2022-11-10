import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const MyReviews = () => {
    UseTitle('My Reviews')
    const { user } = useContext(UserContext)
    const [reviews, setReviews] = useState([]) 
    console.log('inside my review ',user.email)

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user?.email}`, {
            headers : {
                authorizaton  : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])


    console.log(reviews)
    return (
        <div>
             
           <h1>My reviews page</h1>
            {/* {
                reviews.map(review => {

                })
            } */}
        </div>
    );
};

export default MyReviews;