import React from "react";
import ScreenView from "../../screen/ScreenView";
import { useForm } from "react-hook-form";
import InputField from "../../components/my-fields/InputField";
import MyButton from "../../components/buttons/MyButton";

const Profile = () => {
    const {
        control,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            username: "Deepak Dhiman",
            email: "deepak@gmail.com",
            mobile: "1234567890",
        }
    });

    return <>
        <ScreenView title={"Profile"}>
            <div className="flex flex-col justify-start items-start gap-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 w-full">
                    <InputField
                        control={control}
                        errors={errors}
                        label="Username"
                        disabled={true}
                        name="username"
                    />
                    <InputField
                        control={control}
                        errors={errors}
                        label="Email"
                        disabled={true}
                        type="email"
                        name="email"
                    />
                    <InputField
                        control={control}
                        errors={errors}
                        label="Phone Number"
                        name="mobile"
                    />
                </div>
                <div className="flex justify-start items-center">
                    <MyButton className="bg-blue-700 py-2 text-[15px]">Save</MyButton>
                </div>
            </div>
        </ScreenView>
    </>
}

export default Profile;