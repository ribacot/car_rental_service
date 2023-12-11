export function conditionsArrCard({ rentalConditions, mileage, rentalPrice }) {
	const [age, license, deposit] = rentalConditions?.split("\n");
	const ageNumber = age.split(" ").pop();

	const conditionsArr = [
		`Minimum age: ${ageNumber}`,
		license,
		deposit,
		`Mileage: ${mileage}`,
		`Price: ${rentalPrice}`,
	];
	return conditionsArr;
}
