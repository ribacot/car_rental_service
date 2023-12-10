import './catalog.css'
export default function ListDiscriptionCar({ descriptionsArr=[] ,className=""}) {

	return (
		<ul className={`flex flex-wrap  ${className}`}>
			{descriptionsArr.map((el, idx) => (
				<li key={idx}>
					{idx !== descriptionsArr.length - 1 ? (
						<span>
							{el}
							<span className='text-[#1214171A]'> &nbsp; | &nbsp; </span>
						</span>
					) : (
						el
					)}
				</li>
			))}
		</ul>
	);
}
