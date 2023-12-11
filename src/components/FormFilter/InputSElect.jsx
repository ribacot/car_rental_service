import { useState } from "react";
import BtnDropDown from "../Ui/BtnDropDown";
import ListDropDown from "./ListDropDown";
import { modelArr } from "./modelArr";
import "./form.css";
import { useDispatch } from "react-redux";

export default function InputSElect({ valueObj, register }) {

	const { id = "", placeholder = "", label = "" } = valueObj;
	const [value, setvalue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const onSElect = (el) => {
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
					{...register(id, {
						required: `${id === "model" ? "required" : null}`,
					})}
					id="model"
					className="w-[244px] h-[48px] rounded-[14px] bg-input placeholder:text-darck placeholder:pl-[18px] placeholder:placeholderText"
				/>
				<BtnDropDown onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
				{isOpen ? <ListDropDown arr={modelArr} onClick={onSElect} /> : null}
			</div>
		</div>
	);
}
