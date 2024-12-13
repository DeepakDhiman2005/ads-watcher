import { lazy } from "react";
import { Navigate } from "react-router-dom";

// import/lazy
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Payments = lazy(() => import("../pages/payments/Payments"));
const Profile = lazy(() => import("../pages/profile/Profile"));

const panels = [
    {
        path: "dashboard",
        element: <Dashboard />,
        meta: {
            title: "Dashboard - AdsWatcher"
        }
    },
    {
        path: "payments",
        element: <Payments/>,
        meta: {
            title: "Payments"
        }
    },
    {
        path: "profile",
        element: <Profile />,
        meta:{ 
            title: "Profile"
        }
    }
]

export default panels;