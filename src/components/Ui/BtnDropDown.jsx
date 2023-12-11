import { ReactComponent as Down } from "../../svg/chevron-down.svg";
import { ReactComponent as Up } from "../../svg/chevron-up.svg";

export default function BtnDropDown({ isOpen = false, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="absolute top-0 right-0 rounded-r-[14px] text-[#121417] w-[48px] h-[48px] flex justify-center items-center"
		>
			{isOpen ? <Up className="stroke-current" /> : <Down className="stroke-current" />}
		</button>
	);
}
