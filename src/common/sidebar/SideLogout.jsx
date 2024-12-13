import React from "react";
import { LuLogOut } from "react-icons/lu";
import handleLogout from "../../constants/handleLogout";

const SideLogout = () => {
    return <>
        <div className="hover:underline hover:transition-all flex justify-start items-center gap-x-2 cursor-pointer hover:underline-offset-2" onClick={handleLogout}>
            <LuLogOut size={16} />
            <h2>Logout</h2>
        </div>
    </>
}

export default SideLogout;