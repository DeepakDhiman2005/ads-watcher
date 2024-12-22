import React from "react";
import TouchableOpacity from "../../components/buttons/TouchableOpacity";
import usePath from "../../hooks/usePath";

const AdWatcherCard = ({
    title = "",
    icon,
    link,
    onClick,
    points = 0
}) => {
    const path = usePath();
    return <>
        <TouchableOpacity onClick={() => {
            onClick();
            // path.openLink(link, "_self");
        }}>
            <div className="w-full h-full text-black main-text py-4 rounded-md bg-gray-300 hover:bg-gray-400 transition-all hover:shadow-lg hover:shadow-slate-300 cursor-pointer flex flex-col relative justify-center items-center gap-y-3">
                {icon}
                <h2 className="font-medium text-[17px]">{title}</h2>
                <div className="absolute top-2 right-2 bg-rose-800 w-5 h-5 flex justify-center items-center text-white font-poppins not-italic leading-normal font-medium rounded-full">{points || 0}</div>
            </div>
        </TouchableOpacity>
    </>
}

export default AdWatcherCard;