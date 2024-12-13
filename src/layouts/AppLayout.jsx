import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../redux/features/action";

const AppLayout = () => {
    const { sidebar } = useSelector(state => state.action);
    const dispatch = useDispatch();

    return <>
        <main className="flex justify-start items-start">
            <Sidebar
                isOpen={sidebar}
                setIsOpen={(open) => dispatch(setAction({ sidebar: open }))}
            />
            <div className="w-full md:w-[80%]">
                <Outlet />
            </div>
        </main>
    </>
}

export default AppLayout;