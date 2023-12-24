import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { modelArr } from "./downDropArrs";
import { priceArr } from "./downDropArrs";
import { removeCars } from "../../Redux/Cars/carsSlice";
import { addFilter } from "../../Redux/Filter/filterSlice";
import Button from "../Ui/Button";

import InputSelect from "./InputSElect";
import InputFilterMileage from "./InputFilterMileage";

const modelInputsObj = {
	id: "model",
	placeholder: "Enter the text",
	label: "Car brand",
};

const priceSelectObj = {
	id: "price",
	placeholder: "To $",
	label: "Price/ 1 hour",
};

const stopWord = "Select all";

export default function FormFilter() {
	const [isDropdown, setIsOpenDropdown] = useState(true);
	const dispatch = useDispatch();

	const initialForm = {
		model: "",
		price: "",
		mileadgFrom: "",
		mileadgTo: "",
	};
	const { register, handleSubmit, reset } = useForm({
		mode: "onChenge",
		values: initialForm,
	});

	const onSubmit = (data) => {
		const { model, price, mileadgFrom, mileadgTo } = data;
		if (!model & !price & !mileadgFrom & !mileadgTo) {
			return;
		}
		console.log("model: ", model);
		console.log("price: ", price);
		console.log("mileadgFrom: ", mileadgFrom);

		if (model.toLowerCase() === stopWord.toLowerCase()) {
			dispatch(removeCars());
			dispatch(addFilter({ model: "" }));
			onDrop();
			return;
		}

		dispatch(removeCars());
		model && dispatch(addFilter({ model }));
		onDrop();
		reset();
	};

	const onDrop = () => {
		setIsOpenDropdown(!isDropdown);
	};

	return (
		<div className="flex justify-center pb-[30px]">
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				autoComplete="off"
				className="flex items-end gap-[18px] flex-wrap"
			>
				<InputSelect
					valueObj={modelInputsObj}
					register={register}
					isDropdown={isDropdown}
					onDrop={onDrop}
					dropDownArr={modelArr}
					className="w-[224px]"
				/>
				<InputSelect
					valueObj={priceSelectObj}
					register={register}
					isDropdown={isDropdown}
					onDrop={() => setIsOpenDropdown(!isDropdown)}
					dropDownArr={priceArr({ start: 30, limit: 200, step: 10 })}
					className="w-[125px]"
				/>
				<div className="flex items-end">
					<InputFilterMileage
						register={register}
						label="Сar mileage / km"
						id="mileadgFrom"
						placeholder="From"
						className="rounded-l-[14px] border-r-[1px]"
					/>
					<InputFilterMileage
						register={register}
						id="mileadgTo"
						placeholder="To"
						className="rounded-r-[14px] border-l-[1px] "
					/>
				</div>
				<Button type="submit" clasName="w-fit px-[44px] py-[14px] ">
					Search
				</Button>
			</form>
		</div>
	);
}
