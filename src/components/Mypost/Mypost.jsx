import { use, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Authcontex } from "../../Contex/Authcontex";

const Mypost = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = use(Authcontex);
  const email = user.email;
  console.log(email);
  const initialdata = data.filter((item) => item.email == email);
  const [mypost, setpost] = useState(initialdata);

  const handledelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelance-task-nu.vercel.app/tasks/all/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const remainingdata = mypost.filter((data) => data._id !== id);
              setpost(remainingdata);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      {
        <div>
          <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Budget</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {mypost.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.category}</td>
                    <td>{post.title}</td>
                    <td>{post.budget}</td>
                    <td className="text-xs">{post.description}</td>
                    <td>
                      <div className="join join-vertical space-x-4 lg:join-horizontal">
                        <Link to={`/update/${post._id}`}>
                          <button className="btn join-item">
                            <BiEditAlt></BiEditAlt>{" "}
                          </button>
                        </Link>
                        <button
                          onClick={() => handledelete(post._id)}
                          className="btn join-item"
                        >
                          <MdDeleteForever></MdDeleteForever>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
};

export default Mypost;
