import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontex } from "../../Contex/Authcontex";
import Swal from "sweetalert2";

const Login = () => {
    const{login,Googlelogin}=use(Authcontex)
    const navigate=useNavigate();
    const location=useLocation()
   
    const handlelogin=e=>{
         e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const { email, password } = Object.fromEntries(
      formdata.entries()
    );
    console.log(email, password);
    login(email,password)
    .then(result=>{
      
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfull",
          showConfirmButton: false,
          timer: 1500
        });
           navigate(`${location.state? location.state: '/'}`)
    }).catch(error=>{
        console.log(error)
    })

    }
    const handlegooglelogin=()=>{
        Googlelogin()
        .then(result=>{
            console.log(result.user)
             Swal.fire({
      position: "top-end",
      icon: "success",
      title: "register successfull",
      showConfirmButton: false,
      timer: 1500
    });
     navigate(`${location.state? location.state: '/'}`)
    
        }).catch(error=>{
            console.log(error)
        })
      }
  return (
    <div className="p-4">
      <div className="hero  min-h-screen">
        <div className="">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handlelogin}>
                <h2 className="text-3xl font-bold text-center mb-4 mt-4">
                  Login Now
                </h2>
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral w-full text-center mt-4">
                  Login
                </button>
              </form>
              <button onClick={handlegooglelogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p>
                Don't have an account?
                <Link className="text-blue-600 underline" to="/register">
                  register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
