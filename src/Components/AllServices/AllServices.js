import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Home/Services/Services';

const AllServices = () => {
    const services = useLoaderData()
    
    return (
        <div className='grid grid-cols-2 gap-10 w-3/4 mx-auto'>
            {services?.map(service => <Services key = {service._id} service={service}></Services> )}
            
        </div>
    );
};

export default AllServices;