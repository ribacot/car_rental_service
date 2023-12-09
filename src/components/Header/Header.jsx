import Container from "../Container";
import Nav from "./Nav/nav";

export default function Header() {
	return (
		<Container>
			<Nav className="flex items-center justify-between"/>
		</Container>
	);
}
