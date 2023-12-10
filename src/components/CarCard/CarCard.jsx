import RentalCar from "../RentalCar/RentalCar";
import TitleCar from "../CatalogComponents/TitleCar";
import ListDiscriptionCar from "../CatalogComponents/ListDiscriptionCar";
import ConditionsList from "./ConditionsList";
import { descriptionsArrCard } from "../../utilites/descriptionsArrCard";
import { conditionsArrCard } from "../../utilites/conditionsArrCard";

export default function CarCard({ onClick, car }) {
	const { accessories, functionalities, description } = car;

	const descriptionsArr = descriptionsArrCard(car);

	const accessoriesArr = [...accessories, ...functionalities];
	const conditionsArr = conditionsArrCard(car);

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
			<ConditionsList conditionsArr={conditionsArr} />

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
