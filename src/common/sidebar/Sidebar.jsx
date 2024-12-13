import React from "react";

// sidebar-components
import SidebarProvider from "./SidebarProvider";

// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Sidebar = ({
    isOpen = false,
    setIsOpen = () => {}
}) => {
    const links = [
        {
            path: "dashboard",
            text: "Dashboard",
            icon: <LuLayoutDashboard size={16} />,
        },
        {
            path: "payments",
            text: "Payments",
            icon: <MdOutlinePayment size={16} />,
        },
        {
            path: "profile",
            text: "Profile",
            icon: <FaRegUser size={15} />,
        },
    ]
    return <>
        <SidebarProvider 
            links={links}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    </>
}

export default Sidebar;