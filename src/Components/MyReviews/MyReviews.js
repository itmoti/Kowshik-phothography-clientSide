import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const MyReviews = () => {
    UseTitle('My Reviews')
    const {user} = useContext(UserContext)
   const [reviews , setReviews] = useState([])
   useEffect(() => {
    fetch(`http://localhost:5000/myreviews/${user.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
   },[])

    
    console.log(reviews)
    return (
        <div>
            {
                reviews.map(review => {

                })
            }
        </div>
    );
};

export default MyReviews;