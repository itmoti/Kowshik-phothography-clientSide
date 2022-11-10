import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const MyReviews = () => {
    UseTitle('My Reviews')
    const { user } = useContext(UserContext)
    const [reviews, setReviews] = useState([])
    const privateKey = localStorage.getItem('token')
    console.log(privateKey)

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json' , 
                
            } , 
            body : JSON.stringify(privateKey)
            
            })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


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