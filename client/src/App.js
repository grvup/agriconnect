import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Rightbars from "./components/rightBar/Rightbars";
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import Hirer from "./pages/hirer/Hirer";
import Hireworker from "./pages/hireworker/Hireworker";
import Manageprofile from "./pages/manageprofile/Manageprofile";
import Workerprofile from "./pages/worker_profile/Workerprofile";
import Notification from "./pages/notification/Notification";
import History from "./pages/history/History";
import Method from "./pages/method/Method";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Manageaddress from "./pages/manage address/Manageaddress";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" , backgroundColor: "#f6f3f3"}}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <Rightbars />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
           path: "/hire/:id",
           element : <Hirer/>
        },
        {
          path: "/workerprofile/:id",
          element : <Workerprofile/>
        },
        {
          path: "/history/:id",
          element : <History/>
        },
        {
          path: "/notifications/:id",
          element : <Notification/>
        },
        {
          path: "/hireworker/:id",
          element : <Hireworker/>
        },
        {
          path: "/method",
          element : <Method/>
        },
        {
          path: "/contact",
          element : <Contact/>
        },
        {
          path: "/about",
          element : <AboutUs/>
        },
        {
          path: "/manageprofile/:id",
          element : <Manageprofile/>
       },
       {
        path: "/manageaddress/:id",
        element : <Manageaddress/>
     },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
