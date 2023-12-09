import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "./carsInitialState";
import { getAllcarsThunk, getCarByIdThunk } from "./thunks";

const hendlePending = (state) => {
	return { ...state, isLoading: true };
};
const hendleFulfilledGetAll = (state, { payload }) => {
	return { ...state, cars: [...state.cars, ...payload], isLoading: false, error: null };
};

const hendleFulfilledGetById = (state, { payload }) => {
	return { ...state, selectedCar: payload, isLoading: false, error: null };
};
const hendleRejected = (state, { payload }) => {
	return { ...state, error: payload, isLoading: false };
};

const carsSlice = createSlice({
	name: "cars",
	initialState: carsInitialState,
	reducers: {
		addToFavorites: (state, { payload }) => {
			return {
				...state,
				favoriteCars: [...state.favoriteCars, payload],
				isLoading: false,
			};
		},
		removeFavorites: (state, { payload }) => {
			return { ...state, favoriteCars: [...payload] };
		},
		removeCars: (state) => {
			return { ...state, cars:[] };
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getAllcarsThunk.pending, hendlePending)
			.addCase(getAllcarsThunk.fulfilled, hendleFulfilledGetAll)
			.addCase(getAllcarsThunk.rejected, hendleRejected)

			.addCase(getCarByIdThunk.pending, hendlePending)
			.addCase(getCarByIdThunk.fulfilled, hendleFulfilledGetById)

			.addCase(getCarByIdThunk.rejected, hendleRejected);
	},
});

export const allCarsReducer = carsSlice.reducer;
export const { addToFavorites, removeFavorites, removeCars } = carsSlice.actions;
