export const modelArr = [
	"Select all",
	"Buick",
	"Volvo",
	"HUMMER",
	"Subaru",
	"Mitsubishi",
	"Nissan",
	"Lincoln",
	"GMC",
	"Hyundai",
	"MINI",
	"Bentley",
	"Mercedes-Benz",
	"Aston Martin",
	"Pontiac",
	"Lamborghini",
	"Audi",
	"BMW",
	"Chevrolet",
	"Mercedes-Benz",
	"Chrysler",
	"Kia",
	"Land",
];
export const priceArr = ({ start = 0, limit = 10, step = 1 }) => {
	const arr = [];
	for (let i = start; i <= limit; i += step) {
		arr.push(i);
	}
	return arr;
};
