import CatalogList from "../../components/CatalogComponents/CatalogList";
import Container from "../../components/Container";
// import FormFilter from "../../components/FormFilter/FormFilter";
export default function Catalog() {
	return (
		<Container className="pb-[150px]">
			{/* <FormFilter/> */}
			<CatalogList />

		</Container>
	);
}
