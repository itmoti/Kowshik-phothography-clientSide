import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import Carousel from '../Carousel/Carousel';
import Services from './Services/Services';
const Home = () => {
  
    const [services , setServices] = useState();
    useEffect( () => {
        fetch('http://localhost:5000/home/services')
        .then(res => res.json())
        .then(data =>setServices(data))
        // .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='w-5/6 mx-auto grid grid-cols-3 gap-4'>{services?.map(service => <Services key={service._id} service = {service}></Services> )}</div>
          
           <button className="btn btn-primary block mx-auto"><Link to={'/services'}>See all</Link></button>
           <Carousel></Carousel>
        </div>
    );
};

export default Home;