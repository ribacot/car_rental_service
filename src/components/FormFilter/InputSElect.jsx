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
	const EL=useRef(null)
	const refs = {};
	const elRef = id;
	refs[elRef] = EL;
	// const EL = document.getElementById(`${id}`);
	// useEffect(() => {
	// 	console.log(refs[elRef].current);
	// }, []);

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
		// setIsFocus(true);
		// EL.focus();
		setvalue(el);
		console.log(refs[elRef].current);
		refs[elRef].current.focus();
	};
	const onBtnClick = (e) => {
		setIsActiveSelect(!isActiveSelect);
		return;
	};

	return (
		<div>
			<label htmlFor={id} ref={EL} className="lebleText">
				{label}
			</label>
			<div className="relative">
				<input
					readOnly={true}
					onClick={onBtnClick}
					value={value}
					type="text"
					placeholder={placeholder}
					{...register(id, {})}
					id="model"
					className="w-[224px] h-[48px] rounded-[14px] pl-[18px] bg-input placeholder:text-darck placeholder:pl-[18px]  "
				/>
				<BtnDropDown onClick={onBtnClick} isOpen={isActiveSelect} />
				{isActiveSelect & isDropdown ? (
					<ListDropDown
						arr={dropDownArr}
						onClick={onSElect}
						register={register}
						id={id}
					/>
				) : null}
			</div>
		</div>
	);
}
