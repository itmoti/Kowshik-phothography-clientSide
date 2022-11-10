import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';
import toast, { Toaster } from 'react-hot-toast';


const MyReviews = () => {
    UseTitle('My Reviews')
    const { user } = useContext(UserContext)
    const [reviews, setReviews] = useState([]) 
    const [servicesName , setServiceName] = useState([])
//    edit button 
    const handleEditBtn =(id) => {
        console.log(id)
    }
    // delete button 
    const handleDeleteBtn  =(id) => {
          fetch(` http://localhost:5000/reviews/${id}` , {
              method : 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
             console.log(data)
             if(data.deletedCount) {
                toast('Successfully Deleted');
             }
            })
        
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user.email}`, {
            headers : {
                authorizaton  : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])

    console.log(reviews)
    return (
        <div className='text-center'>
             
           <h1>My reviews page</h1>
           {
            reviews.length ? 
                reviews?.map(rev => <div className='border ' key={rev._id}><p>
                    <h1 className='text-lg'>{rev._id}</h1>
                    {rev.review}jkjk</p>
                    <button onClick={() =>handleEditBtn(rev._id)}>Edit</button>
                    <button onClick={() => handleDeleteBtn(rev._id)}>Delete</button>
                    </div>)
            
         :
         'No reviews found'
         }
           <Toaster />
           
        </div>
    );
};

export default MyReviews;