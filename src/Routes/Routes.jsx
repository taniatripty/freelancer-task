import { createBrowserRouter } from "react-router";
import Privateroute from "../Privateroute/Privateroute";
import Root from "../Root/Root";
import Addtask from "../components/Addtask/Addtask";
import Browsetask from "../components/Browsetask/Browsetask";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Mypost from "../components/Mypost/Mypost";
import Register from "../components/Register/Register";
import Updatedata from "../components/Updatedata/Updatedata";
import Errorpage from "./Errorpage/Errorpage";
import Browseservices from "../Pages/Browseservices/Browseservices";
import Browseservicedetails from "../Pages/Browseservices/Browseservicedetails";
import Design from "../Pages/Design/Design";
import Graphics from "../Pages/Graphics/Graphics";
import Videoediting from "../Pages/Videoediting/Videoediting";
import Writting from "../Pages/Writting/Writting";
import Digital from "../Pages/Digital/Digital";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        Component: Home,
       
      },
      {
        path: "/browsetask",
        Component: Browsetask,
        loader: () => fetch("https://freelance-task-nu.vercel.app/tasks/all"),
      },

      {
        path: "/addtask",
        element: (
          <Privateroute>
            <Addtask></Addtask>
          </Privateroute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/details/:id",
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://freelance-task-nu.vercel.app/tasks/all/${params.id}`),
      },
      {
        path: "/mypost",
        element: (
          <Privateroute>
            <Mypost></Mypost>
          </Privateroute>
        ),
        loader: () => fetch("https://freelance-task-nu.vercel.app/tasks/all"),
      },
      {
        path: "/update/:id",
        element: (
          <Privateroute>
            <Updatedata></Updatedata>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://freelance-task-nu.vercel.app/tasks/all/${params.id}`),
      },
      {
        path:'/browseservicedetails',
        Component:Browseservicedetails,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      },
      {
        path:'/design',
        Component:Design,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      },
      {
        path:'/graphics',
        Component:Graphics,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      },
       {
        path:'/video',
        Component:Videoediting,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      },
      {
        path:'/writting',
        Component:Writting,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      },
       {
        path:'/digital',
        Component:Digital,
        loader:()=>fetch('https://freelance-task-nu.vercel.app/tasks/all')
      }
    ],
  },
]);
