export default function Container({ children, className = "" }) {
	return <div className={`container mx-auto px-[15px] md:px-[30px] xl:px-[128px] ${className}`}>{children}</div>;
}
