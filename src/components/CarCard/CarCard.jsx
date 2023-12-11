import RentalCar from "../RentalCar/RentalCar";
import TitleCar from "../CatalogComponents/TitleCar";
import ListDiscriptionCar from "../CatalogComponents/ListDiscriptionCar";
import ConditionsList from "./ConditionsList";
import { descriptionsArrCard } from "../../utilites/descriptionsArrCard";
import { conditionsArrCard } from "../../utilites/conditionsArrCard";
import "./carCard.css";
import BtnClose from "../Ui/BtnClose";
export default function CarCard({ onClick, car }) {
	const { accessories, functionalities, description } = car;

	const descriptionsArr = descriptionsArrCard(car);

	const accessoriesArr = [...accessories, ...functionalities];
	const conditionsArr = conditionsArrCard(car);

	return (
		<div className="relative flex flex-col gap-[14px] w-[541px]  rounded-[24px] p-[40px] bg-white ">
			<div className=" w-full h-[248px] rounded-[14px] overflow-hidden  bg-slate-300 ">
				<img src={car.photoLink} alt={car.make} className="h-full w-full object-cover " />
			</div>
			<div className="">
				<TitleCar car={car} isCatalog={false} />
				<ListDiscriptionCar
					descriptionsArr={descriptionsArr}
					className="itemDescriptionText"
				/>
			</div>
			<p className="descriptionCardCarText">{description}</p>
			<div>
				<h4 className="descriptionCardCarTitle mb-[8px]">
					Accessories and functionalities:
				</h4>
				<ListDiscriptionCar
					descriptionsArr={accessoriesArr}
					className="itemDescriptionText"
				/>
			</div>
			<div>
				<h4 className="descriptionCardCarTitle mb-[8px]">Rental Conditions: </h4>
				<ConditionsList conditionsArr={conditionsArr} />
			</div>

			<RentalCar tel="+380730000000">Rental car</RentalCar>
			<BtnClose className="absolute top-[16px] right-[16px]" onClick={onClick} />
		</div>
	);
}
