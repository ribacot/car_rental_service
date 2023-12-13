import { useForm } from "react-hook-form";
import Button from "../Button";
import { useState } from "react";
import InputSelect from "./InputSelect";

const ForminputsValuesArr = {
	id: "model",
	placeholder: "Enter the text",
	label: "Car brand",
};

export default function FormFilter() {
	const [isDropdown, setIsOpenDropdown] = useState(false);

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
		const { model } = data;
		model && console.log("model: ", model);
		setIsOpenDropdown(false);
		reset();
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
					valueObj={ForminputsValuesArr}
					register={register}
					isDropdown={isDropdown}
					onDrop={() => setIsOpenDropdown(!isDropdown)}
				/>
				<Button type="submit" clasName="w-fit px-[44px] py-[14px] ">
					Search
				</Button>
			</form>
		</div>
	);
}
