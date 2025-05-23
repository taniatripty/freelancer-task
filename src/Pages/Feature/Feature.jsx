import { useEffect, useState } from "react";
import Featuredetails from "./Featuredetails";

const Feature = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://freelance-task-nu.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table table-auto">
          
          <thead>
            <tr>
              <th></th>
             <th>Name</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Budget</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
           

            {data.map((item,index) => (
              <Featuredetails key={item._id} index={index} item={item}></Featuredetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feature;
