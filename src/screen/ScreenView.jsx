import React from "react";
import TouchableOpacity from "../components/buttons/TouchableOpacity";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setAction } from "../redux/features/action";

const ScreenView = ({
    title = null,
    className = "",
    children
}) => {
    const dispatch = useDispatch(state => state.action);
    const openSidebar = () => dispatch(setAction({ sidebar: true }));

    return <>
        <div className="flex flex-col w-full py-2 px-3 justify-start items-start gap-y-3">
            {
                title && <div className="w-full flex justify-between items-center">
                    <h2 className="font-medium text-[20px]">{title}</h2>
                    <TouchableOpacity className="text-slate-900 md:hidden" onClick={openSidebar}>
                        <RxHamburgerMenu size={22} />
                    </TouchableOpacity>
                </div>
            }
            <div className={`w-full ${className}`}>
                {children}
            </div>
        </div>
    </>
}

export default ScreenView;