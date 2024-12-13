import EmailField from "../../components/fields/EmailField";
import PasswordField from "../../components/fields/PasswordField";
import MyButton from "../../components/buttons/MyButton";
import { useForm } from "react-hook-form";
import UserField from "../../components/fields/UserField";
import useAxios from "../../hooks/useAxios";
import usePath from "../../hooks/usePath";
import handleError from "../../constants/handleError";
import handleMessage from "../../constants/handleMessage";

const Signup = () => {
    const {
        control,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    });
    const axios = useAxios();
    const path = usePath();

    const onSubmit = async (data) => {
        data = { ...data, role: "users" };
        console.log(data);
        try {
            const response = await axios.post("/users/signup", data);
            if (response.status === 200) {
                handleMessage({ msg: response.data?.message });
                path.navigate("/login");
            }
        } catch (error) {
            handleError(error);
        }
    }

    return <>
        <div className="bg-red-700 main-text w-full h-screen flex justify-center items-center">
            <div className="bg-white p-3 w-[90%] sm:w-3/4 md:w-1/2 lg:w-[40%] h-[80%] rounded-md flex flex-col justify-start items-center">
                <h2 className="text-[35px] my-5 font-semibold text-slate-950">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full px-4 sm:px-10 justify-start items-start gap-y-6">
                    <UserField
                        placeholder="Type your username"
                        control={control}
                        error={errors}
                        name="username"
                    />
                    <EmailField
                        placeholder="Type your email Id"
                        control={control}
                        error={errors}
                        name="email"
                    />
                    <PasswordField
                        placeholder="Type your password"
                        control={control}
                        error={errors}
                        name="password"
                    />

                    <div className="flex justify-center items-center w-full">
                        <MyButton type="submit" className="w-full rounded-3xl font-normal text-[16px] py-2 bg-red-800">Sign up</MyButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Signup;