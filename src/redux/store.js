import { configureStore } from "@reduxjs/toolkit";

// features
import auth from "./features/auth";
import action from "./features/action";
import point from "./features/point";
import user from "./features/user";

const store = configureStore({
    reducer: {
        auth: auth,
        action: action,
        point: point,
        user: user,
    }
})

export default store;