export default function Button({ children, clasName="", onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex justify-center items-center h-[44px] w-full text-white bg-blue transition  duration-300 ease-in-out hover:bg-darckBlue rounded-[12px] ${clasName}
    `}
		>
			{children}
		</button>
	);
}
