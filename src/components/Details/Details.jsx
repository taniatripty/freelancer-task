
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
  const data = useLoaderData();
  const [bids, setBids] = useState(0);

  useEffect(() => {
    const savedBids = parseInt(localStorage.getItem(`bids-${data._id}`)) || 0;
    setBids(savedBids);
  }, [data._id]);

  const handleBids = () => {
    const newCount = bids + 1;
    localStorage.setItem(`bids-${data._id}`, newCount);
    setBids(newCount);
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card w-96 bg-base-100 shadow-md">
        <div className="card-body">
          <img className='h-48 rounded-2xl' src={data.photo} alt="" />
          <h2 className="card-title text-gray-500">{data.title}</h2>
          <p className='text-2xl text-gray-500 font-bold text-center'>Posted By</p>
          <div className='flex justify-between'>
            <p className='font-semibold text-gray-500'>{data.name}</p>
            <p className='font-semibold text-gray-500'>{data.email}</p>
          </div>
          <div className='flex justify-around'>
            <p className='text-gray-500'>Category: {data.category}</p>
            <p className='text-gray-500'>Budget: {data.budget}</p>
          </div>
          <p className='text-gray-500'>{data.description}</p>
          <p className="font-semibold text-gray-500">Current Bids: {bids}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBids} className="btn btn-primary">Bid Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
