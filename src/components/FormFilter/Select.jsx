import { useCallback, useEffect, useRef, useState } from "react";
import BtnDropDown from "../Ui/BtnDropDown";
import ListDropDown from "./ListDropDown";
import "./form.css";

export default function InputSelect({
	valueObj,
	register,
	isDropdown,
	onDrop,
	dropDownArr = [],
}) {
	const { id = "", placeholder = "", label = "" } = valueObj;
	const [value, setvalue] = useState("");
	const [isActiveSelect, setIsActiveSelect] = useState(false);
	const Select = useRef(null);
	const onDropMemo = useCallback(() => {
		onDrop();
	}, [onDrop]);

	useEffect(() => {
		if (!isDropdown) {
			setIsActiveSelect(false);
			setvalue("");
			onDropMemo();
		}
	}, [isDropdown, onDropMemo]);

	const onSElect = (el) => {
		Select.current.focus();
		setvalue(el);
	};
	const onBtnClick = () => {
		setIsActiveSelect(!isActiveSelect);
		return;
	};

	return (
		<div>
			<label htmlFor={id} ref={Select} className="lebleText">
				{label}
			</label>
			<div className="relative">
				<input
					id={id}
					readOnly={true}
					onClick={onBtnClick}
					onChange={onSElect}
					value={value}
					type="text"
					placeholder={placeholder}
					{...register(id)}
					className="w-[224px] h-[48px] rounded-[14px] pl-[18px] bg-input placeholder:text-darck placeholder:pl-[18px]  "
				/>
				<BtnDropDown onClick={onBtnClick} isOpen={isActiveSelect} />
				{isActiveSelect & isDropdown ? (
					<ListDropDown arr={dropDownArr} onClick={onSElect} />
				) : null}
			</div>
		</div>
	);
}
