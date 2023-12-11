import Container from "../Container";
import Nav from "./Nav/nav";

export default function Header() {
	return (
		<Container className="pt-[30px] pb-[30px]">
			<Nav className="flex items-center justify-between"/>
		</Container>
	);
}
