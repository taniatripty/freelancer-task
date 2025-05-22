import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Browsedetails from './Browsedetails';

const Browsetask = () => {
    const data=useLoaderData();
   // console.log(data)
    return (
        <div className="overflow-x-auto">
  <table className="table w-11/12 mx-auto">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((item,index)=> <Browsedetails key={item._id} index={index} item={item}></Browsedetails>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default Browsetask;