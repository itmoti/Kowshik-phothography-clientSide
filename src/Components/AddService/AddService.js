import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    UseTitle('Add Service')
    const handleAddserviceBtn = (event) => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const price = form.price.value;
        const imgurl = form.imgLink.value;
        const description = form.description.value

        const info = { name, price, imgurl, description }
        console.log(info)

        fetch('https://kowshik-photography-serverside.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('Successfully added');


                }
            })
    }

    return (
        <>
            <form onSubmit={handleAddserviceBtn} className='w-2/4 mx-auto'>
                <div>
                    <label className='block mb-1 '>Name</label>
                    <input className="input input-bordered input-sm input-secondary  max-w-xs" type={'text'} name={'name'} placeholder={'Servicee Name'} required />
                </div>
                <div>
                    <label className='block mb-1 '>Price</label>
                    <input className="input input-bordered input-sm input-secondary  max-w-xs" type={'number'} name={'price'} placeholder={'Price'} required />
                </div>
                <div>
                    <label className='block mb-1 '>Image Link</label>
                    <input className="input input-bordered input-sm input-secondary  max-w-xs" type={'url'} name={'imgLink'} placeholder={'Img Link'} required />
                </div>
                <div>
                    <label className='block mb-1 '>Description</label>
                    <textarea type={'text'} name={'description'} placeholder={'Servicee Description'} required />
                </div>
                <button type='submit' className='btn btn-primary' >Submit</button>

            </form>

            <Toaster />

        </>
    );
};

export default AddService;