import jhon from "../../assets/jhon.jpg"
import freelancer from '../../assets/blog8.jpg'
import custer from '../../assets/blog11.jpg'

const Review = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 mb-9 ">
     <h3 className="font-bold text-center text-3xl mt-7 mb-4">Freelancer review</h3>
     <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src={jhon}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">⭐⭐⭐⭐⭐</h2>
    <p>“Very good overall. The developer followed our specifications closely and showed strong React and backend skills. Minor delays in communication but the final result was well worth it.”</p>
    
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src={freelancer}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">⭐⭐⭐⭐⭐</h2>
    <p>“Highly professional and skilled developer. Great communication, fast turnaround, and exceptional attention to detail. Our website is now faster, more secure, and more modern thanks to their expertise.”</p>
   
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src={custer}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">⭐⭐⭐⭐⭐</h2>
    <p>“Outstanding experience working with this web developer. They brought our vision to life with clean, efficient code and a keen eye for user experience. The project was delivered on time and exceeded expectations.”</p>
    
  </div>
</div>
     </div>
      
    </div>
  );
};

export default Review;
