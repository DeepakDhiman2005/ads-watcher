import handleMessage from "./handleMessage";

const handleError = (error) => {
    let message = error?.response?.data?.error || error?.response?.data?.message || error?.response?.data;
    handleMessage({ msg: message, type: "error" });
}

export default handleError;