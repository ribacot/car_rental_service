export default function TitleCar({ car = {}, isCatalog = true, className = "" }) {
	const { make, model, year, rentalPrice } = car;
	return (
		<div
			className={`flex justify-between ${
				isCatalog ? "titleCarText" : "titleCarTextCard"
			} ${className}`}
		>
			<h3>
				{make} {model ? <span className="text-blue font-[Inter]">{model}</span> : null}
				,&nbsp;
				{year}
			</h3>
			{isCatalog ? rentalPrice : null}
		</div>
	);
}
