import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const MyReviews = () => {
    UseTitle('My Reviews')
    const {user} = useContext(UserContext)
    const email = user.email

    
    console.log(user.email)
    return (
        <div>
            its  my reviews page
        </div>
    );
};

export default MyReviews;