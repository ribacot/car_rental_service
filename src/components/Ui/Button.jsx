export default function Button({ children, clasName="",type="button", onClick }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex justify-center items-center h-[44px]  text-white bg-blue transition  duration-300 ease-in-out hover:bg-darkBlue rounded-[12px] ${clasName}
    `}
		>
			{children}
		</button>
	);
}
