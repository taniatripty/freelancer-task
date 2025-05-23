import { Link } from "react-router";
import digital from "../../assets/digitalpic.jpeg";
import graphic from "../../assets/service11.jpg";
import design from "../../assets/service12.jpg";
import webpic from "../../assets/service8-768x576.jpg";
import video from "../../assets/video2.jpeg";
import writting from "../../assets/writting1.jpeg";

const Browseservices = () => {
  return (
    <div className=" mt-10 mb-5 w-11/12 mx-auto">
      <h2 className="text-4xl text-center font-bold mb-8">
        Browse services by category
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={webpic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Building and maintaining websites or web applications using
              front-end and back-end technologies.
            </p>
            <div className="card-actions">
              <Link to="/browseservicedetails">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={design} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Design</h2>
            <p>
              Designing the layout, visual style, and user interface of websites
              with a focus on responsiveness and aesthetics.
            </p>
            <div className="card-actions">
              <Link to="/design">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={graphic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Graphics design</h2>
            <p>
              Creating visual content for branding, marketing, and digital
              platforms using design tools.
            </p>
            <div className="card-actions">
              <Link to="/graphics">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={writting} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Writting</h2>
            <p>
              Producing written content for blogs, websites, ads, and social
              media with clarity and purpose.
            </p>
            <div className="card-actions">
              <Link to="/writting">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={video} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Video editing</h2>
            <p>
              Editing raw video footage into polished, engaging content with
              effects, music, and transitions.
            </p>
            <div className="card-actions">
              <Link to="/video">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>

          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={digital} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Digital Marketing</h2>
            <p>
              {" "}
              Promoting brands online through SEO, social media, email
              campaigns, and paid advertising.
            </p>
          <div className="card-actions">
              <Link to="/digital">
                <button className="btn btn-primary">see all</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browseservices;
