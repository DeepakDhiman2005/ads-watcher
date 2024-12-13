import { createSlice } from "@reduxjs/toolkit";
import handleError from "../../constants/handleError";
import useAxios from "../../hooks/useAxios";

const axios = useAxios();

const initialState = {
    userData: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            Object.keys(payload).forEach((item) => {
                state[item] = payload[item];
            })
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// functions
export const getUserRedux = (_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/users/get", { _id });
            if (response.status === 200) {
                dispatch(setUser({ userData: response.data }));
            }
        } catch (error) {
            handleError(error);
        }
    }
}