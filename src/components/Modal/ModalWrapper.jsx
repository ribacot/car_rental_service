import { useCallback, useEffect } from "react";

export default function ModalWrapper({ children, onClick }) {

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
			className="fixed top-0 left-0 w-screen h-screen bg-[#12141780] backdrop-blur-xl flex justify-center items-center"
			onClick={hendleBackDrop}
		>
			{children}
		</div>
	);
}
