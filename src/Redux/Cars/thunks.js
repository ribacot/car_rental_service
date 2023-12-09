import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceCars } from "./servise/instanceAxios";

export const getAllcarsThunk = createAsyncThunk("cars/getAll", async (data={}) => {
	const{page=1,limit=12}=data
	const cars = await instanceCars("cars",{params:{page,limit}});
	return cars.data;
});

export const getCarByIdThunk = createAsyncThunk("cars/getCarById", async (id) => {
	const car = await instanceCars(`cars/${id}`);
	return car.data;
});

export const addCarFavoriteListThunk = createAsyncThunk("cars", async (id) => {
	const car = await instanceCars(`cars/${id}`);
	console.log(car.data);
	await instanceCars("favorite", { method: "POST", body: JSON.stringify(car.data) });
	const carsFavorites = await instanceCars("favorite");
	console.log(carsFavorites.data);
	return carsFavorites.data;
});
