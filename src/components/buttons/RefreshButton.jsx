import React from "react";

// icons
import { GrRefresh } from "react-icons/gr";

// buttons
import MyButton from "./MyButton";
import { useDispatch } from "react-redux";

const RefreshButton = ({
    onRefresh = () => { }
}) => {
    // redux
    const dispatch = useDispatch();
    // const { user } = useSelector(state => state.user);
    // functions
    const handleRefresh = () => {
        // console.log("navbar wallet refresh!")
        onRefresh(true);
        // dispatch(getUserByIdThunkMiddleware(user?._id));
    }

    return <>
        <MyButton
            className="flex justify-center py-2 px-4 rounded-sm text-[15px] items-center gap-x-2 main-bg"
            onClick={handleRefresh}
        >
            <GrRefresh size={17} />
            <span>Refresh</span>
        </MyButton>
    </>
}

export default RefreshButton;