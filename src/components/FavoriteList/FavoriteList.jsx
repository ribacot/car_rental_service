// import { useDispatch, useSelector } from "react-redux";
// import { getAllCarsSelect, getFavoritIdArrSelect } from "../../Redux/Cars/selectors";
// import CarsListItem from "./CarsListItem";
// import { useEffect, useState } from "react";
// import { getAllcarsThunk } from "../../Redux/Cars/thunks";
// import LoadMore from "../LoadMore/LoadMore";
// import { numberPage, removeCars } from "../../Redux/Cars/carsSlice";
// import { useLocation } from "react-router-dom";

// export default function FavoriteList(second) {

// 	const dispatch = useDispatch();
// 	const location = useLocation();
// 	const { cars } = useSelector(getAllCarsSelect);
// 	const favoriteIdArr = useSelector(getFavoritIdArrSelect);

// 	const [isloadMore, setIsloadMore] = useState(true);
// 	const [page, setPage] = useState(1);

// 	const favoriteCars =
// 		cars.length && cars?.filter((car) => favoriteIdArr.includes(car.id));

// 	const limitPage = 12;
// 	console.log("CAR LENGTH: ", cars.length);
// 	console.log("page:", page);

// 	const carrentPage = Math.ceil(cars.length / limitPage);
// 	console.log("carrentPage: ", carrentPage);

// 	// useEffect(() => {
// 	// 	dispatch(removeCars());
// 	// }, [location]);

// 	// useEffect(() => {
// 	// 	if (!cars.length) {
// 	// 		dispatch(getAllcarsThunk(page));
// 	// 	}
// 	// }, [dispatch,cars.length, page]);

// 	// useEffect(() => {
// 	// 	if (carrentPage >= page) {

// 	// 		dispatch(getAllcarsThunk({ page: carrentPage  }))}
// 	// 	 else {
// 	// 		dispatch(getAllcarsThunk({ page}));
// 	// 	}
// 	// }, [dispatch, page, carrentPage]);

// 	const onloadMore = () => {
// 		setPage(page + 1);
// 	};

// 	return (
// 		<>
// 			<ul className="flex flex-wrap gap-[28px] ">
// 				{ favoriteCars.length &&
// 					  favoriteCars?.map((car) => <CarsListItem car={car} key={car.id} />)}
// 			</ul>
// 			{isloadMore && <LoadMore onClick={onloadMore} />}
// 		</>
// 	);
// }

// }