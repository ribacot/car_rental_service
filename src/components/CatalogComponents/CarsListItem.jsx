import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../Button";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { addToFavorites, removeFavorites } from "../../Redux/Cars/carsSlice";
import { getFavoritIdArrSelect } from "../../Redux/Cars/selectors";
import { createPortal } from "react-dom";
import ModalWrapper from "../Modal/ModalWrapper";

const modalRoot = document.querySelector('#modal');


export default function CarsListItem({ car = {} }) {
	const favoriteIdArr = useSelector(getFavoritIdArrSelect);
	const dispath = useDispatch();

	const [isFavorite, setIsFavorite] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        if (isModalActive) {
          document.getElementById('modal').classList.add('noScroll');
        } else {
          document.getElementById('modal').classList.remove('noScroll');
        }
      }, [isModalActive]);
    

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
      };
    

	const onChengeFavorite = () => {
		const includes = favoriteIdArr.includes(car.id);
		if (!includes) {
			dispath(addToFavorites(car.id));
		} else {
			const removeFavoriteArr = favoriteIdArr.filter((el) => el !== car.id);
			dispath(removeFavorites(removeFavoriteArr));
		}
	};

	return (
		<li className="flex flex-col justify-between w-[274px] h-[428px] rounded-t-[14px] rounded-b-[12px] bg-red-500 ">
			<div className="relative w-full h-[268px] rounded-[14px]">
				<button className="absolute top-[14px] right-[14px]" onClick={onChengeFavorite}>
					<Heart className={`${isFavorite ? "stroke-blue fill-blue" : "stroke-white"}`} />
				</button>
			</div>

			<Button clasName="" onClick={onToogleModal}>Learn more</Button>

            {isModalActive &&
            createPortal(
              <ModalWrapper onToogleModal={onToogleModal} ></ModalWrapper>,
              modalRoot,
            )}

		</li>
	);
}
