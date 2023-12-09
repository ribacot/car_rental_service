import { NavLink, useLocation } from "react-router-dom";
// import { ReactComponent as Logo } from "../../../images/svg/logo.svg";

import css from "./nav.module.css";
import { firstLetterUp } from "../../../utilites/firstLetterUp";
import { transformPath } from "../../../utilites/transformPath";

const navLinkArr = [
	{ path: "/", text: "home" },
	{ path: "/catalog", text: "catalog" },
	{ path: "/favorite", text: "favorite" },
];

export default function Nav({ className= "", styleLogo = "", styleNavList = "", onClick }) {
	const location = useLocation();
	const pathPage = location.pathname;

	return (
		<div className={className}>
			<NavLink to="/" state={{ from: location }} className={`${styleLogo}`}>
				{/* <Logo className="w-[116px] md:w-[162px]" onClick={onClick} /> */}
        LOGO
			</NavLink>

			<ul className={`${styleNavList} ${css.listNav}`}>
				{navLinkArr.map(({ path, text }) => (
					<li key={text} onClick={onClick}>
						<NavLink
							to={path}
							id={text}
							state={{ from: location }}
							className={`cursor-pointer hover:opacity-80 ${
								transformPath(path) === transformPath(pathPage) ? "text-red-500 " : ""
							}`}
						>
							{firstLetterUp(text)}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
