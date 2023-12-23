export default function RentalCar({ children, tel="" }) {
	return <a
		href={`tel:${tel}`}
		className={`flex h-[44px] w-[168px]  justify-center items-center  text-white bg-blue transition  duration-300 ease-in-out hover:bg-darkBlue rounded-[12px] `}
	>
		{children}
	</a>;
}
