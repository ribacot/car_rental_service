import { useCallback, useEffect } from "react";

export default function useClose(fn) {
	const onFnmemo = useCallback(() => {
		fn();
	}, [fn]);

	useEffect(() => {
		const hendleModal = (e) => {
			if (e.code === "Escape") {
				onFnmemo();
			}
            
		};
        const hendleBackDrop = (e) => {
            if (e.target === e.currentTarget) fn();
        };
    
		window.addEventListener("keydown", hendleModal);
		window.addEventListener("click", hendleBackDrop);
		return () => {
			window.removeEventListener("keydown", hendleModal);
			window.removeEventListener("click", hendleBackDrop);
		};
	}, [onFnmemo]);
}
