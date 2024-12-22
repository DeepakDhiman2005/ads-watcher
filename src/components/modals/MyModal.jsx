import { Dialog } from "@material-tailwind/react";
import React from "react";
import TouchableOpacity from "../buttons/TouchableOpacity";
import { RxCross2 } from "react-icons/rx";

const MyModal = ({
    isOpen = false,
    setIsOpen = () => { },
    title = "",
    className = "",
    children,
    width = "60%",
}) => {
    const handleClose = () => setIsOpen(false);

    return <>
        <Dialog
            open={isOpen}
            handler={handleClose}
            style={{
                width: width,
                maxWidth: width
            }}
        >
            <div className="rounded-md overflow-hidden">
                <div className="flex main-text text-white justify-between items-center py-2 px-3 bg-blue-800">
                    <h2>{title}</h2>
                    <TouchableOpacity onClick={handleClose}>
                        <RxCross2 size={18} />
                    </TouchableOpacity>
                </div>
                <div className={`p-3 w-full ${className}`}>
                    {children}
                </div>
            </div>
        </Dialog>
    </>
}

export default MyModal;