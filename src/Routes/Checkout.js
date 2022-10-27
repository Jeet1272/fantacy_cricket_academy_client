import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()
    return (
        <div className='text-center m-5 p-5'>
            <h2>{course.name}</h2>
            <h1 className='text-warning m-5 p-3'>Congratulations for getting premier access </h1>
        </div>
    );
};

export default Checkout;