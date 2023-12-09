import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarByIdThunk } from "../../Redux/Cars/thunks";
import { getCarByIdSelect } from "../../Redux/Cars/selectors";

export default function CarCard({ onClick, carId = "" }) {
	const dispatch = useDispatch();
	const car = useSelector(getCarByIdSelect);
console.log("car: ",car);
	useEffect(() => {
		if (carId) dispatch(getCarByIdThunk(carId));
	}, [carId, dispatch]);

	console.log("carID: ", carId);
	return (
		<div className="relative w-[541px] h-[752px] rounded-[24px]  bg-rose-700">
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
