import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "./filterInitialState";

const filtersSlice = createSlice({
	name: "cars",
	initialState: filterInitialState,
	reducers: {
		addFilter: (state, { payload }) => {
			return {
				...state,...payload
				
			};
		},
		removeFilters: () => {
			return { ...filterInitialState };
		},
	},

});

export const filtersReducer = filtersSlice.reducer;
export const { addFilter,removeFilters} = filtersSlice.actions;
