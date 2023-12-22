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
	const  {model}  = useSelector(filterSelector);
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
			dispatch(getAllcarsThunk({page,make:model}));
		}
	}, [dispatch, cars.length, page,model]);

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
					? cars?.map((car) => <CarsListItem car={car} key={car.id} />)
					: favoriteCars.length
					? favoriteCars?.map((car) => <CarsListItem car={car} key={car.id} />)
					: null}
			</ul>
			{isloadMore & !isFavoritePage ? <LoadMore onClick={onloadMore} /> : null}
		</>
	);
}
