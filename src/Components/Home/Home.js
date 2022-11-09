import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import UseTitle from '../CustomHooks/UseTitle';
import Services from './Services/Services';
const Home = () => {
    UseTitle('Home')
  
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