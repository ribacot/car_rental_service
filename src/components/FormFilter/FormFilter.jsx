import { useForm } from "react-hook-form";
import Button from "../Ui/Button";
import { useState } from "react";
import { modelArr } from "./downDropArrs";
import { priceArr } from "./downDropArrs";
import { useDispatch } from "react-redux";
import { removeCars } from "../../Redux/Cars/carsSlice";
import { addFilter } from "../../Redux/Filter/filterSlice";
import InputSelect from "./InputSElect";

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
		mileadg: "",
	};
	const { register, handleSubmit, reset } = useForm({
		mode: "onChenge",
		values: initialForm,
	});

	const onSubmit = (data) => {
		const { model, price } = data;
		console.log("model: ", model);
		console.log("price: ", price);
		if (model.toLowerCase() === stopWord.toLowerCase()) {
			dispatch(addFilter({ model: "" }));
			dispatch(removeCars());

			return;
		}
		dispatch(removeCars());
		model && dispatch(addFilter({ model }));
		onDrop();
		reset();
	};

	const onDrop = () => {
		setIsOpenDropdown(false);
	};

	return (
		<div className="flex justify-center pb-[30px]">
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				autoComplete="off"
				className="flex items-end gap-[18px]"
			>
				<InputSelect
					valueObj={modelInputsObj}
					register={register}
					label={modelInputsObj.label}
					isDropdown={isDropdown}
					onDrop={onDrop}
					dropDownArr={modelArr}
					required
				/>
				<InputSelect
					valueObj={priceSelectObj}
					register={register}
					isDropdown={isDropdown}
					onDrop={() => setIsOpenDropdown(!isDropdown)}
					dropDownArr={priceArr({ start: 30, limit: 200, step: 10 })}
					label={priceSelectObj.label}
				/>
				<Button type="submit" clasName="w-fit px-[44px] py-[14px] ">
					Search
				</Button>
			</form>
		</div>
	);
}
