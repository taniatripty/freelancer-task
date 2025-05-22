import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div className='flex justify-center items-center min-h-auto'>
        <div className="card w-96 bg-base-100  mb-5  mt-5 shadow-md">
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p className='text-2xl font-bold text-center'>posted by</p>
    <div className='flex justify-between'>
        <p className='font-semibold'>{data.name}</p>
        <p className='font-semibold'>{data.email}</p>
    </div>
    <div className='flex justify-around'>
        <p>Category:{data.category}</p>
        <p>Budget:{data.budget}</p>

    </div>
    <p className='text-gray-500'>{data.description}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Bids Now</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Details;