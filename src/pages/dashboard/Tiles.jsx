import React, { useState } from "react";
import TileCard from "../../common/cards/TileCard";
import TouchableOpacity from "../../components/buttons/TouchableOpacity";
import { IoWalletOutline } from "react-icons/io5";
import PaymentModal from "../../components/modals/PaymentModal";
import { convertWithdrawRedux, pointsToAmountRedux } from "../../redux/features/point";
import { useDispatch, useSelector } from "react-redux";
import { SiConvertio } from "react-icons/si";

const Tiles = ({ user = null }) => {
    const [isOpenPayment, setIsOpenPayment] = useState(false);
    // const { user } = useSelector(state => state.auth);
    const { userData } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const covertPointToAmount = () => {
        dispatch(pointsToAmountRedux({ _id: user?._id, points: userData?.points }));
    }

    const convertWithdraw = () => {
        dispatch(convertWithdrawRedux({ _id: user?._id, amount: userData?.amount }));
    }

    return <>
        <PaymentModal
            isOpen={isOpenPayment}
            setIsOpen={setIsOpenPayment}
        />

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5">
            <TileCard
                // title="Total Earining"
                title={<div className="w-full flex justify-between items-center">
                    <h2>Total Earining</h2>
                    <TouchableOpacity
                        className="hover:text-blue-900 text-blue-800"
                        title={"Earining convert in withdraw"}
                        placement="bottomLeft"
                        onClick={convertWithdraw}
                    >
                        <SiConvertio size={22} />
                    </TouchableOpacity>
                </div>}
                titleClass="w-full"
                value={`$${user?.amount || 0}`}
                valueClass="text-green-700"
            />
            <TileCard
                // title="Withdraw Amount ($5)"
                title={<div className="w-full flex justify-between items-center">
                    <h2>Withdraw Amount ($5)</h2>
                    <TouchableOpacity
                        className="hover:text-green-800 text-blue-800"
                        title={"click to withdrawal money"}
                        placement="bottom"
                        onClick={() => setIsOpenPayment(true)}
                    >
                        <IoWalletOutline size={22} />
                    </TouchableOpacity>
                </div>}
                titleClass="w-full"
                // value="$10"
                value={`$${user?.withdrawal || 0}`}
                valueClass="text-red-700"
            />
            <TileCard
                // title="Total Points"
                title={<div className="w-full flex justify-between items-center">
                    <h2>Total Points</h2>
                    <TouchableOpacity
                        className="hover:text-green-900 text-green-800"
                        title={"Points convert in amount"}
                        placement="bottomRight"
                        onClick={covertPointToAmount}
                    >
                        <SiConvertio size={22} />
                    </TouchableOpacity>
                </div>}
                titleClass="w-full"
                // value="~300"
                value={`~${user?.points || 0}`}
                valueClass="text-blue-700"
            />
        </div>
    </>
}

export default Tiles;