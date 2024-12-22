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
import usePath from "../../hooks/usePath";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { userData } = useSelector(state => state.user);
    // console.log(user);
    // console.log(userData);
    const path = usePath();

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
                        title="Click Ads (Low)"
                        icon={<TbHandClick size={50} />}
                        link={"https://luglawhaulsano.net/4/7438395"}
                        onClick={() => dispatch(handlePointsRedux({
                            _id: user?.id,
                            type: "increase",
                            point: 10
                        }, (call) => {
                            if(call) path.openLink("https://luglawhaulsano.net/4/7438395", "_self");
                        }))}
                        points={10}
                    />
                    <AdWatcherCard
                        title="Click Ads (High)"
                        icon={<LuMousePointerClick size={50} />}
                        // link={"https://luglawhaulsano.net/4/7438395"}
                        link={"https://luglawhaulsano.net/4/7432883"}
                        onClick={() => dispatch(handlePointsRedux({
                            _id: user?.id,
                            type: "increase",
                            point: 20
                        }, (call) => {
                            if(call) path.openLink("https://luglawhaulsano.net/4/7432883", "_self");
                        }))}
                        points={20}
                    />
                </div>
            </div>
        </ScreenView>
    </>
}

export default Dashboard;