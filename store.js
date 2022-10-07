import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "../components/userSlice";

export default configureStore({
    reducer: {
        user: UserReducer,
    }
})