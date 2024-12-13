import React from "react";

const TileCard = ({
    title = "",
    value = "",
    titleClass = "",
    valueClass = "",
}) => {
    return <>
        <div className="w-full main-text font-medium bg-gray-50 border flex flex-col justify-start items-start gap-y-1 border-solid rounded-md p-3 border-gray-200 shadow-md shadow-gray-200">
            <h2 className={`text-[40px] font-medium ${valueClass}`}>{value}</h2>
            <div className={titleClass}>{title}</div>
        </div>   
    </>
}

export default TileCard;