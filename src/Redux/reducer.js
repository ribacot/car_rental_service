import { combineReducers } from "redux";
import { allCarsReducer } from "./Cars/carsSlice";
import { filtersReducer } from "./Filter/filterSlice";
export const reducer = combineReducers({
	allCars: allCarsReducer,
	filters: filtersReducer,
});
