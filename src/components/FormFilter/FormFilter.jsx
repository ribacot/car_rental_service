import { useForm } from "react-hook-form";
import InputSElect from "./InputSElect";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { getAllcarsThunk } from "../../Redux/Cars/thunks";
import { removeCars } from "../../Redux/Cars/carsSlice";

const ForminputsValuesArr = {
	id: "model",
	placeholder: "Enter the text",
	label: "Car brand",
};

export default function FormFilter({}) {
	const dispatch = useDispatch();

	const initialForm = {
		model: "",
		price: "",
		mileadg: "",
	};
	const { register, handleSubmit, reset } = useForm({
		mode: "onSubmit",
		values: initialForm,
	});

	const onSubmit = (data) => {
		const { model } = data;
		dispatch(removeCars)
		dispatch(getAllcarsThunk({ filter: model }));
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
				<InputSElect valueObj={ForminputsValuesArr} register={register} />
				<Button type="submit" clasName="w-fit px-[44px] py-[14px] ">
					Search
				</Button>
			</form>
		</div>
	);
}
