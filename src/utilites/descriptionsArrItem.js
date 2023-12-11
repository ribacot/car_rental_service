export const descriptionsArrItem = (car) => {
	const [city, country] = car.address?.split(", ").slice(1);

	const descriptionsArr = [
		city,
		country,
		car.rentalCompany,
		car.type,
		car.model,
		car.id,
		car.functionalities[2],
	];
	return descriptionsArr;
};
