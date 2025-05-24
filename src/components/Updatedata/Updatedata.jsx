

import { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Authcontex } from "../../Contex/Authcontex";

const Updatedata = () => {
  const data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState(null); // For modal data
  const { user } = use(Authcontex);

  const handleupdatetask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedtask = {
      ...Object.fromEntries(formData.entries()),
      deadline: startDate.toISOString(), // add deadline to task
    };

    fetch(`https://freelance-task-nu.vercel.app/tasks/all/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedtask),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.modifiedCount) {
          setSelectedTask(updatedtask); // Save to state for modal
          document.getElementById("update_modal").showModal(); // Open modal
        }
      });
  };

  return (
    <div className="bg-amber-50 p-4 min-h-screen w-11/12 mx-auto">
      <h2 className="text-3xl text-center font-bold">Update Task</h2>

      <form onSubmit={handleupdatetask}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={data.title}
              className="input w-full"
              placeholder="Title"
            />
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Category</label>
            <select
              className="input input-bordered w-full"
              name="category"
              defaultValue={data.category}
            >
              <option value="web development">Web Development</option>
              <option value="design">Design</option>
              <option value="Writting">Writing</option>
              <option value="Marketing">Marketing</option>
              <option value="video editing">Video Editing</option>
              <option value="photography">Mobile app develop</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="graphics">Graphics Design</option>
            </select>
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={data.description}
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Deadline</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              name="budget"
              defaultValue={data.budget}
              className="input w-full"
              placeholder="Budget"
            />
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              value={user && user.email}
              readOnly
              className="input w-full"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset border-base-100 p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={user && user.displayName}
              readOnly
              className="input w-full"
              placeholder="Name"
            />
          </fieldset>
        </div>
        <button className="w-full mt-5 btn btn-success text-xl" type="submit">
          Update Task
        </button>
      </form>

      {/* Modal */}
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-center mb-2">Task Updated</h3>
          {selectedTask && (
            <div className="space-y-2">
              <p><strong>Title:</strong> {selectedTask.title}</p>
              <p><strong>Category:</strong> {selectedTask.category}</p>
              <p><strong>Description:</strong> {selectedTask.description}</p>
              <p><strong>Deadline:</strong> {new Date(selectedTask.deadline).toLocaleDateString()}</p>
              <p><strong>Budget:</strong> {selectedTask.budget}</p>
              <p><strong>Email:</strong> {selectedTask.email}</p>
              <p><strong>Name:</strong> {selectedTask.name}</p>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Updatedata;
