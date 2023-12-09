import { useDispatch, useSelector } from "react-redux";
import { getAllCarsSelect, getFavoritIdArrSelect } from "../../Redux/Cars/selectors";
import CarsListItem from "./CarsListItem";
import { useEffect } from "react";
import { getAllcarsThunk } from "../../Redux/Cars/thunks";

export default function CatalogList({isFavoritePage = false}) {
	const dispatch = useDispatch();
	const { cars } = useSelector(getAllCarsSelect);
	const favoriteIdArr = useSelector(getFavoritIdArrSelect);
	useEffect(() => {
			dispatch(getAllcarsThunk());
	}, [dispatch]);
	const favoriteCars = cars?.filter((car) => favoriteIdArr.includes(car.id));

	return (
		<ul className="flex flex-wrap gap-[28px] ">
			{!isFavoritePage
				? cars?.map((car) => <CarsListItem car={car} key={car.id} />)
				: favoriteCars?.map((car) => <CarsListItem car={car} key={car.id} />)}
		</ul>
	);
}
