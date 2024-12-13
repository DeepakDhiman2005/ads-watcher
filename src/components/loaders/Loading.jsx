import { Spin } from "antd";
import React from "react";

const Loading = () => {
    return <>
        <div className="fixed bg-white/35 top-0 left-0 z-30 flex justify-center items-center h-full w-full">
            <Spin />
        </div>
    </>
}

export default Loading;