// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BlogImage from "../assets/blog.png";

function Blog() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signed Up Successfully");

        setFormData({
            firstName: '',
            lastName: '',
            email: ''
        });
    };

    return (
        <div className='flex flex-col md:flex-row p-4 md:p-16 w-full h-full font-wittgenstein bg-slate-400'>
            <div className='md:w-1/2 md:mx-16'>
                <h1 className='text-3xl md:text-5xl text-[#353593] font-bold my-2 pr-4 md:pr-20'>Subscribe to Our <span className='text-[#f1b94a]'>Newsletter Blog</span></h1>
                <p className='text-base md:text-lg mb-4'>Sign up for our weekly newsletter to receive the latest books, updates, and special offers from Epic Reads.</p>
                <div className='block md:hidden'>
                    <img src={BlogImage} className='mb-4 md:h-96 md:w-96' alt='Blog' />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className='mb-2' htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='p-2 mb-4 border border-gray-300 rounded'
                    />

                    <label className='mb-2' htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='p-2 mb-4 border border-gray-300 rounded'
                    />

                    <label className='mb-2' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='p-2 mb-4 border border-gray-300 rounded'
                    />

                    <button type='submit' className='bg-[#353593] text-white p-2 rounded hover:bg-blue-600 transform duration-300'>Sign Up</button>
                </form>
            </div>
            <div className='hidden md:block md:w-1/2 mt-8 md:mt-0'>
                <img src={BlogImage} className='m-16 px-16 w-full h-auto' alt='Blog' />
            </div>
        </div>
    );
}

export default Blog;
