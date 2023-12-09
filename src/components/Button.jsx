export default function Button({ children, clasName="", onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex justify-center items-center h-[44px] w-full text-white bg-blue hover:bg-darckBlue rounded-[12px] ${clasName}
    `}
		>
			{children}
		</button>
	);
}
