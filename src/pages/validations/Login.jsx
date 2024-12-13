import EmailField from "../../components/fields/EmailField";
import PasswordField from "../../components/fields/PasswordField";
import MyButton from "../../components/buttons/MyButton";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import handleError from "../../constants/handleError";
import handleMessage from "../../constants/handleMessage";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/features/auth";

const Login = () => {
    const {
        control,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const axios = useAxios();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        // console.log(data);
        try {
            const response = await axios.post("/users/login", data);
            if (response.status === 200) {
                // console.log(response.data);
                const { token, message } = response.data;
                handleMessage({ msg: message });

                const decoded = jwtDecode(token);
                // console.log(decoded);
                dispatch(setAuth({ user: decoded, role: decoded?.role, token }));
            }
        } catch (err) {
            handleError(err);
        }
    }

    return <>
        <div className="bg-red-700 main-text w-full h-screen flex justify-center items-center">
            <div className="bg-white p-3 w-[90%] sm:w-3/4 md:w-1/2 lg:w-[40%] h-[80%] rounded-md flex flex-col justify-start items-center">
                <h2 className="text-[35px] my-5 font-semibold text-slate-950">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full px-4 sm:px-10 justify-start items-start gap-y-6">
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
                    <div className="flex justify-end w-full items-center">
                        <span className="cursor-pointer text-[14px] text-blue-800 hover:underline hover:underline-offset-2 transition-all">Forget password?</span>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <MyButton type="submit" className="w-full rounded-3xl font-normal text-[16px] py-2 bg-red-800">Login</MyButton>
                    </div>

                    <div className="flex flex-col justify-center w-full gap-y-2 items-center">
                        <span className="text-slate-700">Or Sign up using</span>
                        <Link to={"/signup"}>
                            <span className="hover:text-slate-900 hover:underline font-medium hover:underline-offset-2 cursor-pointer">Signup</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login;