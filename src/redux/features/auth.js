import { createSlice } from "@reduxjs/toolkit";
import useStorage from "../../hooks/useStorage";
import handleToken from "../../constants/handleToken";

const storage = useStorage();

const initialState = {
    token: storage.get("token"),
    user: handleToken(),
    role: storage.get("role"),
    isAuthentication: storage.get("isAuth"),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            let { role, token, user } = payload;
            state.token = token;
            state.user = user;
            state.role = role;
            state.isAuthentication = true;

            storage.set("token", token);
            storage.set("role", role);
            storage.set("isAuth", true);
        }
    }
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;