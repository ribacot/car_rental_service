import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarByIdThunk } from "../../Redux/Cars/thunks";
import { getCarByIdSelect } from "../../Redux/Cars/selectors";
import RentalCar from "../RentalCar/RentalCar";
import TitleCar from "../CatalogComponents/TitleCar";
import ListDiscriptionCar from "../CatalogComponents/ListDiscriptionCar";
import ConditionsList from "./ConditionsList";

export default function CarCard({ onClick, carId = "" }) {
	const dispatch = useDispatch();
	const car = useSelector(getCarByIdSelect);
	console.log("car: ", car);
	const {
		id,
		year,
		type,
		mileage,
		address,
		fuelConsumption,
		engineSize,
		accessories,
		functionalities,
		description,
		rentalConditions,
		rentalPrice,
	} = car;

	const [city, country] = address?.split(", ").slice(1);
	const [age, license, deposit] = rentalConditions?.split("\n");
	const ageNumber = age.split(" ").pop();
	// console.log("ageNumber: ",ageNumber);
	const descriptionsArr = [
		city,
		country,
		`id: ${id}`,
		`Year: ${year}`,
		`Type: ${type}`,
		`Fuel Consumption: ${fuelConsumption}`,
		`Engine Size: ${engineSize}`,
	];

	const accessoriesArr = [...accessories, ...functionalities];
	const conditionsArr = [
		`Minimum age: ${ageNumber}`,
		license,
		deposit,
		`Mileage: ${mileage}`,
		`Price: ${rentalPrice}`,
	];

	useEffect(() => {
		if (carId) dispatch(getCarByIdThunk(carId));
	}, [carId, dispatch]);

	return (
		<div className="relative w-[541px] h-[752px] rounded-[24px] p-[40px] bg-white">
			<div className=" w-full h-[248px] rounded-[14px] overflow-hidden  ">
				<img src={car.photoLink} alt={car.make} className="h-full w-full object-cover " />
			</div>
			<TitleCar car={car} isCatalog={false} />
			<ListDiscriptionCar descriptionsArr={descriptionsArr} />
			<p>{description}</p>
			<h4>Accessories and functionalities:</h4>
			<ListDiscriptionCar descriptionsArr={accessoriesArr} />
			<h4>Rental Conditions: </h4>
			{/* <ListDiscriptionCar descriptionsArr={conditionsArr} /> */}
			<ConditionsList conditionsArr={conditionsArr}/>

			<RentalCar tel="+380730000000">Rental car</RentalCar>

			<button
				type="button"
				onClick={onClick}
				className="absolute top-[16px] right-[16px]"
			>
				Close
			</button>
		</div>
	);
}
