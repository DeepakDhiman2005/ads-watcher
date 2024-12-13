import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";

const PasswordField = ({
    label = "Password",
    placeholder = "",
    control,
    error,
    name = "",
    rules = {},
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className="flex flex-col w-full justify-start gap-y-1 items-start">
            <label htmlFor={name} className="text-slate-800">{label}</label>
            <div
                className={`flex justify-center items-center border-b ${
                    error?.[name] ? "border-red-500" : "border-slate-800"
                } gap-x-2 w-full`}
            >
                <RiLockPasswordLine size={18} className="text-slate-900" />
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => (
                        <input
                            {...field}
                            id={name}
                            type={isPasswordVisible ? "text" : "password"}
                            className="w-full outline-none border-none py-1 text-[14px] placeholder:text-gray-600"
                            placeholder={placeholder}
                        />
                    )}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="flex justify-center items-center text-slate-900"
                >
                    {isPasswordVisible ? <GoEyeClosed size={18} /> : <GoEye size={18} />}
                </button>
            </div>
            {error?.[name] && <span className="text-red-500 text-sm">{error[name].message}</span>}
        </div>
    );
};

export default PasswordField;
