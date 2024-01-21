import { useDispatch, useSelector } from "react-redux";
import { getAllCarsSelect, getFavoritIdArrSelect } from "../../Redux/Cars/selectors";
import CarsListItem from "./CarsListItem";
import { useEffect, useState } from "react";
import { getAllcarsThunk } from "../../Redux/Cars/thunks";
import LoadMore from "../Ui/LoadMore";
import { filterSelector } from "../../Redux/Filter/filterSelectors";

export default function CatalogList({ isFavoritePage = false }) {
	const dispatch = useDispatch();
	const { cars } = useSelector(getAllCarsSelect);
	const { model, price, mileadgFrom, mileadgTo } = useSelector(filterSelector);
	// const filteredCars= cars.filter(el=>{el.rentalPrice})
	// const transformRentalPriceNumber = (price) => Number(price.split("").slice(1).join(""));
	// const parsPrice = Number(price?.split(" ")[1]);
	const parsPrice = price?.split(" ")[1] || "";
	const filteredCars = cars.filter(
		(el) => Number(el.rentalPrice.split("").slice(1).join("")) > Number(parsPrice)
	);
	// const filteredCars = cars.map((el) => el.rentalPrice.split("").slice(1).join(""));
	console.log("filteredCars", filteredCars);
	console.log("cars: ", cars);
	console.log("price :", price);
	console.log("parsPrice", parsPrice);

	const favoriteIdArr = useSelector(getFavoritIdArrSelect);

	const [isloadMore, setIsloadMore] = useState(true);

	const limitPage = 12;

	const carrentPage = cars.length / limitPage;

	const [page, setPage] = useState(Math.ceil(carrentPage) || 1);

	const favoriteCars =
		cars.length && cars?.filter((car) => favoriteIdArr.includes(car.id));

	useEffect(() => {
		if (carrentPage !== Math.ceil(carrentPage)) {
			setIsloadMore(false);
		} else {
			setIsloadMore(true);
		}
	}, [carrentPage]);

	useEffect(() => {
		if (!cars.length) {
			dispatch(getAllcarsThunk({ page, make: model }));
		}
	}, [dispatch, cars.length, page, model]);

	useEffect(() => {
		if ((page > 1) & (Math.ceil(carrentPage) < page)) {
			dispatch(getAllcarsThunk({ page }));
		}
	}, [dispatch, page, carrentPage]);

	const onloadMore = () => {
		setPage(page + 1);
	};

	return (
		<>
			<ul className="flex flex-wrap gap-[28px] pb-[100px] justify-center md:justify-between">
				{!isFavoritePage
					? filteredCars?.map((car) => <CarsListItem car={car} key={car.id} />)
					: favoriteCars.length
					? favoriteCars?.map((car) => <CarsListItem car={car} key={car.id} />)
					: null}
			</ul>
			{isloadMore & !isFavoritePage ? <LoadMore onClick={onloadMore} /> : null}
		</>
	);
}
