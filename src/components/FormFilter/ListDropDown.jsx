import { useState } from "react";
import "./form.css";
export default function ListDropDown({ arr = [], onClick}) {
	const [numItem, setNumItem] = useState(null);

	const hendleClick = (el, idx) => {
		onClick(el);
		setNumItem(idx);
	};
	return (
		<div className="absolute left-0 top-[52px] w-full h-[272px] p-[18px] shadow border-current border-[1px] rounded-[14px] bg-white  z-10 dropDownText ">
			<ul className=" w-full h-full overflow-y-scroll scrollBar">
				{arr.map((el, idx) => (
					<li
						key={idx}
						onClick={() => hendleClick(el, idx)}
						className={`cursor-pointer ${
							numItem === idx ? "text-darck" : ""
						} hover:text-darck hover:text-opacity-80`}
					>
						<button type="button" value={el}>
							{el}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
