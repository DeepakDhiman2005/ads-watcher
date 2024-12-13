import React from "react";
import MyModal from "./MyModal";
import { useForm } from "react-hook-form";
import InputField from "../my-fields/InputField";
import MyButton from "../buttons/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAmountRedux } from "../../redux/features/point";

const PaymentModal = ({
    isOpen = false,
    setIsOpen = () => { }
}) => {
    const {
        control,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm();
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        // console.log(data);
        data = { ...data, _id: user?.id };
        dispatch(withdrawAmountRedux(data, (call) => {
            if(call){
                setIsOpen(false);
            }
        }));
    }

    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Withdraw Amount"
            className="py-6 flex flex-col justify-start gap-y-4 items-center"
        >
            <div className="w-full grid grid-cols-2 gap-x-3">
                <InputField
                    control={control}
                    name="accountNumber"
                    label="Account Number"
                    errors={errors}
                    placeholder="e.g 12xx-xxxx-xx45"
                />
                <InputField
                    control={control}
                    name="amount"
                    label="Amount"
                    errors={errors}
                    placeholder="e.g $5"
                />
            </div>
            <div className="w-full flex justify-end items-center">
                <MyButton className="bg-green-800 font-normal py-2 px-3 text-[14px]" onClick={handleSubmit(onSubmit)}>
                    Confirm withdraw
                </MyButton>
            </div>
        </MyModal>
    </>
}

export default PaymentModal;