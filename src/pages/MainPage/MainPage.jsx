import { useDispatch, 
	// useSelector
 } from "react-redux";
import {
	getAllcarsThunk,
	// getCarByIdThunk,
	// addCarFavoriteListThunk,
} from "../../Redux/Cars/thunks";
import { addToFavorites } from "../../Redux/Cars/carsSlice";

export default function MainPage() {
	// const favor = useSelector((state) => state.allCars.favoriteCars);

	// const cars = useSelector((state) => state.allCars.cars);
	// console.log("cars", cars);
	// console.log(favor);

	const dispath = useDispatch();

	const onFetch = () => {
		dispath(getAllcarsThunk());
	};
	const onFetchById = () => {
		dispath(addToFavorites("9612"));
	};
	// const favoriteCars = cars.filter((car) => favor.includes(car.id.toString()));
	// console.log("favoriteCarsArr: ", favoriteCars);

	return (
		<>
			<h1>Main Page</h1>
			<button onClick={onFetch}>Fetch</button>
			{/* <div>{favor}</div> */}
			<button onClick={onFetchById}>Fetch By Id</button>
		</>
	);
}
