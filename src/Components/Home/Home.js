import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import UseTitle from '../CustomHooks/UseTitle';
import Services from './Services/Services';
const Home = () => {
    UseTitle('Home')

    const [services, setServices] = useState();
    useEffect(() => {
        fetch('https://kowshik-photography-serverside.vercel.app/home/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='w-5/6 mx-auto grid grid-cols-3 gap-4'>{services?.map(service => <Services key={service._id} service={service}></Services>)}</div>

            <button className="btn btn-primary block mx-auto my-5"><Link to={'/services'}>See all</Link></button>
            <div className='w-11/12 mx-auto'><Carousel></Carousel></div>
            <div className='w-11/12 mx-auto my-3 bg-base-100   shadow-xl'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Winterswijk_%28NL%29%2C_Woold%2C_Boven_Slinge_--_2014_--_3170.jpg/500px-Winterswijk_%28NL%29%2C_Woold%2C_Boven_Slinge_--_2014_--_3170.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='loading' />
                        <div>
                            <h1 className="text-5xl font-bold">WHAT WE OFFER.</h1>
                            <p className="py-6">
                                <h1 className='text-lg font-bold'>01. Booking</h1>
                                <p>it's gotta be the smartest service ever – Flytographer will connect you with over 300 local photographers in different cities around the world who you can hire to travel around with you and take awesome pictures.</p>
                                <h1 className='text-lg font-bold'>02. Photoshoot</h1>
                                <p>: a photography session and especially one in which a professional photographer takes photographs of someone or something for commercial use </p>
                                <h1 className='text-lg font-bold'>03. Ready to download photo</h1>
                                <p>Just Download Photo with drive link</p>

                            </p>
                            <button className="btn btn-primary"><Link to={'/login'}>Get Started</Link></button>
                        </div>



                    </div>
                </div>

            </div>
            {/* step  */}

            <div className="card bg-base-100   shadow-xl  w-11/12 mx-auto text-center my-8">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Want To Hire us?</h2>
                    <ul className="steps">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step">Make Order</li>
                        <li className="step">We Give Service</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;