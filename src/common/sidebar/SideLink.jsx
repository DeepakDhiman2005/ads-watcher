import React from "react";
import MyLink from "../../components/buttons/MyLink";

const SideLink = ({
    icon,
    text,
    path = "",
}) => {
    return <>
        <MyLink to={path} className="hover:underline hover:transition-all flex justify-start items-center gap-x-2 cursor-pointer hover:underline-offset-2">
            {icon}
            {text}
        </MyLink>
    </>
}

export default SideLink;