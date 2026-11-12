import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";

const combineReducer = combineReducers({
    counter : counterReducer,
})

export const store = configureStore({
    reducer : combineReducer
})

export type RootState = ReturnType<typeof store.getState>
