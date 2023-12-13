import { useState } from "react";
import BtnDropDown from "../Ui/BtnDropDown";
import ListDropDown from "./ListDropDown";
import { modelArr } from "./downDrobArrs";
import "./form.css";

export default function InputSelect({ valueObj, register, isDropdown, onDrop }) {
	const { id = "", placeholder = "", label = "" } = valueObj;
	const [value, setvalue] = useState("");

	const EL = document.getElementById(`${id}`);
	const onSElect = (el) => {
		EL.focus();
		setvalue(el);
	};

	return (
		<div>
			<label htmlFor={id} className="lebleText">
				{label}
			</label>
			<div className="relative">
				<input
					value={value}
					type="text"
					placeholder={placeholder}
					{...register(id, {})}
					id="model"
					className="w-[224px] h-[48px] rounded-[14px] pl-[18px] bg-input placeholder:text-darck placeholder:pl-[18px]  "
				/>
				<BtnDropDown onClick={onDrop} isOpen={isDropdown} />
				{isDropdown ? <ListDropDown arr={modelArr} onClick={onSElect} /> : null}
			</div>
		</div>
	);
}
