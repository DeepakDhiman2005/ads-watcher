import { createSlice } from "@reduxjs/toolkit";
import handleError from "../../constants/handleError";
import useAxios from "../../hooks/useAxios";
import { getUserRedux } from "./user";
import handleMessage from "../../constants/handleMessage";

const axios = useAxios();

const initialState = {
    points: 0,
}

const pointSlice = createSlice({
    name: "point",
    initialState,
    reducers: {
        setPoints: (state, { payload }) => {
            let { type = "increase", point = 0 } = payload;
            switch (type) {
                case "increase":
                    state.points += point;
                    break;
                case "decrease":
                    state.points -= point;
                    break;
                case "bounce":
                    state.points += 50;
                    break;
                case "clear":
                    state.points = 0;
                    break;
                default:
                    state.points += point;
                    break;
            }
        },
    }
})

export const { setPoints } = pointSlice.actions;
export default pointSlice.reducer;

// function
/**
      * @param {object} payload
      * @param {'increase' | 'decrease' | 'bounce' | 'clear'} payload.type  default increase
      * @param {number} payload.point default 0
    */
export const handlePoints = (payload) => {
    return async (dispatch) => {
        dispatch(setPoints(payload));
    }
}

/**
      * @param {object} payload
      * @param {'increase' | 'decrease' | 'bounce' | 'clear'} payload.type  default increase
      * @param {number} payload.point default 0
      * @param {string} payload._id database _id
    */
export const handlePointsRedux = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/points/update", payload);
            if (response.status === 200) {
                dispatch(getUserRedux(payload?._id));
            }
        } catch (error) {
            handleError(error);
        }
    }
}

export const withdrawAmountRedux = (
    payload,
    callback = () => {}
) => {
    return async () => {
        try {
            const response = await axios.post("/points/withdraw", payload);
            if(response.status === 200){
                handleMessage({ msg: response.data?.message });
                callback(true);
            }
        } catch (error) {
            handleError(error);
        } finally {
            callback(false);
        }
    }
}

export const pointsToAmountRedux = (
    payload,
) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/points/amount", payload);
            if(response.status === 200){
                handleMessage({ msg: response.data?.message });
                dispatch(getUserRedux(payload?._id));
            }
        } catch (error) {
            handleError(error);
        } 
    }
}

export const convertWithdrawRedux = (
    payload,
) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/points/convertWithdraw", payload);
            if(response.status === 200){
                handleMessage({ msg: response.data?.message });
                dispatch(getUserRedux(payload?._id));
            }
        } catch (error) {
            handleError(error);
        } 
    }
}