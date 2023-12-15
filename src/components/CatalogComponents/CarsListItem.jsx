import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { addToFavorites, removeFavorites } from "../../Redux/Cars/carsSlice";
import { getCarByIdSelect, getFavoritIdArrSelect } from "../../Redux/Cars/selectors";
import { createPortal } from "react-dom";
import ModalWrapper from "../Modal/ModalWrapper";
import CarCard from "../CarCard/CarCard";
import BtnFavorite from "./BtnFavorite";
import Img from "../Ui/Img";
import ListDiscriptionCar from "./ListDiscriptionCar";
import TitleCar from "./TitleCar";
import "./catalog.css";
import { getCarByIdThunk } from "../../Redux/Cars/thunks";
import { descriptionsArrItem } from "../../utilites/descriptionsArrItem";
import Button from "../Ui/Button";

const modalRoot = document.querySelector("#modal");

export default function CarsListItem({ car = {} }) {
	const favoriteIdArr = useSelector(getFavoritIdArrSelect);
	const selectedCar = useSelector(getCarByIdSelect);
	const dispatch = useDispatch();

	const [isFavorite, setIsFavorite] = useState(false);
	const [isModalActive, setIsModalActive] = useState(false);

	const descriptionsArr = descriptionsArrItem(car);

	useEffect(() => {
		const includes = favoriteIdArr?.includes(car.id);
		if (includes) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [favoriteIdArr, car.id]);

	const onToogleModal = () => {
		setIsModalActive(!isModalActive);
		if (!isModalActive) dispatch(getCarByIdThunk(car.id));
	};

	const onChengeFavorite = () => {
		const includes = favoriteIdArr.includes(car.id);
		if (!includes) {
			dispatch(addToFavorites(car.id));
		} else {
			const removeFavoriteArr = favoriteIdArr.filter((el) => el !== car.id);
			dispatch(removeFavorites(removeFavoriteArr));
		}
	};

	return (
		<li className="flex flex-col justify-between w-[274px] md:w-[340px] xl:w-[274px] rounded-t-[14px] rounded-b-[12px]">
			<div>
				<div className="relative w-full h-[268px] rounded-[14px] overflow-hidden mb-[14px] bg-slate-300 ">
					<Img src={car.photoLink} alt={car.make} />
					<BtnFavorite onClick={onChengeFavorite} isFavorite={isFavorite} />
				</div>
				<TitleCar car={car} className="mb-[8px]" />
				<ListDiscriptionCar
					descriptionsArr={descriptionsArr}
					className="itemDescriptionText pb-[28px]"
				/>
			</div>

			<Button clasName="" onClick={onToogleModal}>
				Learn more
			</Button>

			{isModalActive &&
				createPortal(
					<ModalWrapper onClick={onToogleModal} isModalActive={isModalActive}>
						{selectedCar ? <CarCard onClick={onToogleModal} car={selectedCar} /> : null}
					</ModalWrapper>,
					modalRoot
				)}
		</li>
	);
}
