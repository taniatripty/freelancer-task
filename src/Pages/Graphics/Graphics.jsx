import React from 'react';
import { useLoaderData } from 'react-router';

const Graphics = () => {
    const data=useLoaderData();
    console.log(data);
    const graphics = data.filter((item) => item.category == "graphics");
  console.log(graphics);
    return (
         <div className="w-11/12  mx-auto grid  grid-cols-1 lg:grid-cols-3 gap-5 mt-5 mb-5 ">
      {graphics.map((single) => (
        <div key={single._id}>
          <div className="card bg-base-100 lg:h-96 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={single.photo} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{single.title}</h2>
              <p>{single.description}</p>
              <div className="flex gap-24">
                <p>posted by:{single.name}</p>
                <p className="font-semibold"> ${single.budget}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Graphics;