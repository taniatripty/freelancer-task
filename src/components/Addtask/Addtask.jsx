import { use, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Authcontex } from "../../Contex/Authcontex";
const Addtask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = use(Authcontex);
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formatedate = startDate.toLocaleString("en-CA");
    const formdata = new FormData(form);
    const newtask = Object.fromEntries(formdata.entries());

    const taskdata = {
      formatedate,
      ...newtask,
    };

    fetch("https://freelance-task-nu.vercel.app/tasks/all", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset("");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        // console.log(data);
      });
    console.log(taskdata);
    //console.log(title, formatedate);
  };

  return (
    <div className="bg-amber-50 p-4 min-h-screen w-11/12 mx-auto">
      <h2 className="text-3xl text-center font-bold"> Add Task</h2>

      <form onSubmit={handlesubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">TItle</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Title"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label ">Category</label>
            <select
              className="input input-bordered w-full "
              name="category"
              id="day"
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
          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="photo"
            />
          </fieldset>

          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Deadline</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </fieldset>

          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              name="budget"
              className="input w-full"
              placeholder="Budget"
            />
          </fieldset>

          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              value={user && user.email}
              className="input w-full"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-100 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={user && user.displayName}
              className="input w-full"
              placeholder="Name"
            />
          </fieldset>
        </div>
        <button className="w-full rounded-4xl btn text-xl" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtask;
