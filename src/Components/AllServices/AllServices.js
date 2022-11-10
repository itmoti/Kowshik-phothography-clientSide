import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../CustomHooks/UseTitle';
import Services from '../Home/Services/Services';
import Spinner from '../Spinner';

const AllServices = () => {
    UseTitle('All Services')
    const [spinner, setSpinner] = useState(true)
    // const services =   useLoaderData()
    const [services, setservices] = useState([])
    fetch('https://kowshik-photography-serverside.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setservices(data)
            setSpinner(false)
        })

    return (
        <div className='text-center'>
            {spinner && <Spinner></Spinner>}
            <div className='grid grid-cols-2 gap-10 w-3/4 mx-auto'>
                {services?.map(service => <Services key={service._id} service={service}></Services>)}
            </div>

        </div>
    );
};

export default AllServices;