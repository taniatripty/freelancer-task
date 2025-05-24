

import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever, MdOutlinePreview } from "react-icons/md";
import Swal from "sweetalert2";
import { use } from "react";
import { Authcontex } from "../../Contex/Authcontex";

const Mypost = () => {
  const data = useLoaderData();
  const { user } = use(Authcontex);
  const email = user.email;

  const initialdata = data.filter((item) => item.email === email);
  const [mypost, setpost] = useState(initialdata);

  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelance-task-nu.vercel.app/tasks/all/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingdata = mypost.filter((d) => d._id !== id);
              setpost(remainingdata);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePreview = (post) => {
    const bidKey = `bids-${post._id}`;
    const bids = parseInt(localStorage.getItem(bidKey)) || 0;
    setSelectedPost({ ...post, bids });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
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
            {mypost.map((post, index) => (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>{post.category}</td>
                <td>{post.title}</td>
                <td>{post.budget}</td>
                <td className="text-xs">{post.description}</td>
                <td>
                  <div className="join join-vertical lg:join-horizontal">
                    <Link to={`/update/${post._id}`}>
                      <button className="btn join-item">
                        <BiEditAlt />
                      </button>
                    </Link>
                    <button
                      onClick={() => handledelete(post._id)}
                      className="btn join-item"
                    >
                      <MdDeleteForever />
                    </button>
                    <button
                      onClick={() => handlePreview(post)}
                      className="btn join-item"
                    >
                      <MdOutlinePreview />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
        {modalOpen && selectedPost && (
          <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
              <h2 className="text-xl font-bold mb-2">{selectedPost.title}</h2>
             
              <p className="text-blue-500 font-semibold">
                Total Bids: {selectedPost.bids}
              </p>
              <div className="mt-4">
                <button className="btn btn-error" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypost;
