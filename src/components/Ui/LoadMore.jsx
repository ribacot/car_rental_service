
export default function LoadMore({ onClick }) {
	return (
		<div className="flex justify-center">
			<button type="button" onClick={onClick} className=" text-blue underline hover:text-darckBlue">
				Load more
			</button>
		</div>
	);
}
