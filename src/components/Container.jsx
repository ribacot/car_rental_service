

export default function Container({ children, className = "" }) {
	return <div className={`container mx-auto px-[128px] w-[1440px] backdrop:${className}`}>{children}</div>;
}
