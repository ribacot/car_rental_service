export function descriptionsArrCard(car) {
	const [city, country] = car.address?.split(", ").slice(1);

	const descriptionsArr = [
		city,
		country,
		`id: ${car.id}`,
		`Year: ${car.year}`,
		`Type: ${car.type}`,
		`Fuel Consumption: ${car.fuelConsumption}`,
		`Engine Size: ${car.engineSize}`,
	];

	return descriptionsArr;
}
