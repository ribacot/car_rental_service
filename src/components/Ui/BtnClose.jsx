import { ReactComponent as Close } from "../../svg/x.svg";

export default function BtnClose({ onClick, className = "" }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`text-[#121417
        ] rounded-full transition  duration-300 ease-in-out hover:bg-darkBlue hover:text-white
                    /> ${className}`}
		>
			<Close className="stroke-current" />
		</button>
	);
}
