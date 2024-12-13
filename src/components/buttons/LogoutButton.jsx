import React from "react";
import { LuLogOut } from "react-icons/lu";
import MyButton from "./MyButton";
// import handleLogout from "../../constants/handleLogout";

const LogoutButton = () => {
    return <>
        <MyButton
            className="bg-red-700 py-2 px-4 flex justify-center items-center text-[13px] gap-x-2 font-medium" 
            // onClick={handleLogout}
        >
            <LuLogOut size={15} />
            Logout
        </MyButton>
    </>
}

export default LogoutButton;