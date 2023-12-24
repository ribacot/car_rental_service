import "./form.css";

export default function InputFilterMileage({
	register,
	id = "",
	placeholder = "",
	label = "",
	className,
}) {
	return (
		<div>
			{label ? (
				<label htmlFor={id} className="lebleText mb-[8px]">
					{label}
				</label>
			) : null}
			<div className="relative">
				<input
					id={id}
					type="text"
					placeholder={placeholder}
					{...register(id)}
					className={`w-[160px] h-[48px] pl-[18px] bg-input placeholder:text-darck  outline-darkBlue outline-[2px] bprder-[#8A8A8933] ${className}`}
				/>
			</div>
		</div>
	);
}
