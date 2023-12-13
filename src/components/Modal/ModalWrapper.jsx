import { useCallback, useEffect } from "react";
import BtnClose from "../Ui/BtnClose";

export default function ModalWrapper({ children, onClick, isModalActive }) {
	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add("noScroll");
		} else {
			document.body.classList.remove("noScroll");
		}
	}, [isModalActive]);

	const onClickmemo = useCallback(() => {
		onClick();
	}, [onClick]);

	useEffect(() => {
		const hendleModal = (e) => {
			if (e.code === "Escape") {
				onClickmemo();
			}
		};
		window.addEventListener("keydown", hendleModal);
		return () => {
			window.removeEventListener("keydown", hendleModal);
		};
	}, [onClickmemo]);

	const hendleBackDrop = (e) => {
		if (e.target === e.currentTarget) onClick();
	};

	return (
		<div
			className="fixed top-0 left-0 w-screen h-screen bg-[#12141780] backdrop-blur-xl flex justify-center items-center overflow-y-scroll snap-align-nonesnap-n"
			onClick={hendleBackDrop}
		>
			<div className="relative  w-[541px]  rounded-[24px]  bg-white ">
				{children}
				<BtnClose className="absolute top-[16px] right-[16px]" onClick={onClick} />
			</div>
		</div>
	);
}
