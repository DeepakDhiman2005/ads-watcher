import React from "react";
import { Controller } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";

const EmailField = ({
    label = "Email",
    placeholder = "",
    control,
    error,
    name = "",
}) => {
    return (
        <div className="flex flex-col w-full justify-start gap-y-1 items-start">
            <label htmlFor={name} className="text-slate-800">{label}</label>
            <div
                className={`flex justify-center items-center border-b ${
                    error?.[name] ? "border-red-500" : "border-slate-800"
                } gap-x-2 w-full`}
            >
                <MdOutlineMailOutline size={18} className="text-slate-900" />
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            className="w-full outline-none border-none py-1 text-[14px] placeholder:text-gray-600"
                            placeholder={placeholder}
                        />
                    )}
                />
            </div>
            {error?.[name] && <span className="text-red-500 text-sm">{error?.[name].message}</span>}
        </div>
    );
};

export default EmailField;
