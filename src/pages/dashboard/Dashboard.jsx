import React, { useEffect } from "react";

// screen
import ScreenView from "../../screen/ScreenView";

// icons
import { IoMdStopwatch } from "react-icons/io";
import { LuMousePointerClick } from "react-icons/lu";

// components
import Tiles from "./Tiles";
import AdWatcherCard from "../../common/cards/AdWatcherCard";
import { TbHandClick } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { handlePoints, handlePointsRedux } from "../../redux/features/point";
import { getUserRedux } from "../../redux/features/user";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { userData } = useSelector(state => state.user);
    // console.log(user);
    // console.log(userData);

    useEffect(() => {
        dispatch(getUserRedux(user?.id));
    }, []);

    return <>
        <ScreenView title={"Dashboard"} className="space-y-6">
            <Tiles user={userData} />
            <div className="flex flex-col justify-start items-start gap-y-4">
                <h2 className="font-medium text-[22px] flex justify-start items-center gap-x-1">
                    <IoMdStopwatch size={22} />
                    <span>Ads Watch! <span className="text-[18px] text-green-800">(Earn Money)</span></span>
                </h2>

                <div className="grid grid-cols-3 w-full gap-x-4">
                    <AdWatcherCard
                        title="Click Ads"
                        icon={<TbHandClick size={50} />}
                        link={"https://luglawhaulsano.net/4/7438395"}
                        onClick={() => dispatch(handlePointsRedux({
                            _id: user?.id,
                            type: "increase",
                            point: 30
                        }))}
                    />
                    <AdWatcherCard
                        title="Click Ads"
                        icon={<LuMousePointerClick size={50} />}
                        link={"https://luglawhaulsano.net/4/7438395"}
                        onClick={() => dispatch(handlePoints({
                            type: "increase",
                            point: 30
                        }))}
                    />
                </div>
            </div>
        </ScreenView>
    </>
}

export default Dashboard;