import { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontex } from "../../Contex/Authcontex";

const Navbar = () => {
  const {user,logOut}=use(Authcontex)
  console.log(user)
  const handlelogout=()=>{
    logOut()
    .then(()=>{
      alert('logout successfull')
    }).catch(error=>{
      console.log(error)
    })
  }
  //console.log(import.meta.env.VITE_SOME_KEY) 
  const links =
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-indigo-500" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-indigo-500" : ""
          }
          to="/addtask"
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-indigo-500" : ""
          }
          to="/browsetask"
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-indigo-500" : ""
          }
          to="/mypost"
        >
          My Posted Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-indigo-500" : ""
          }
          to="/contact"
        >
          Browse Tasks
        </NavLink>
      </li>
    </>
  
  return (
  <div>

<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hidden lg:flex">Freelance task marketplace</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div>
   
    <img className="w-10 rounded-4xl lg:ml-52 " src={`${user && user.photoURL}`} alt="" />
  </div>
  <div className="navbar-end">
    <Link to='login'>
    {
      user ?<button onClick={handlelogout}>Logout</button>:<button className="btn">Login</button>
    }
    </Link>
   
  </div>
</div>
  </div>
)
};

export default Navbar;
