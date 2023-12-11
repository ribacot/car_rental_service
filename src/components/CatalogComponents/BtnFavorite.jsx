import { ReactComponent as Heart } from "../../svg/heart.svg";

export default function BtnFavorite({ onClick, isFavorite }) {
	return (
		<button className="absolute top-[14px] right-[14px]" onClick={onClick}>
			<Heart className={`${isFavorite ? "stroke-blue fill-blue" : "stroke-white"}`} />
		</button>
	);
}
