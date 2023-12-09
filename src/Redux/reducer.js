import { combineReducers } from "redux";
import { allCarsReducer } from "./Cars/carsSlice";
export const reducer= combineReducers({
    allCars: allCarsReducer,
})