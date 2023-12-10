import "./carCard.css";

export default function ConditionsList({ conditionsArr }) {
	return (
		<ul className="flex flex-wrap gap-[8px] conditionsListText font-[Montserrat]">
			{conditionsArr.map((el) => (
				<li className="px-[7px] py-[14px]">
					{el.split(":")[0] && <span >{el.split(":")[0]}</span>}
					{el.split(":")[1] && (
						<span className="text-blue namberConditions">{el.split(":")[1]}</span>
					)}
				</li>
			))}
		</ul>
	);
}
