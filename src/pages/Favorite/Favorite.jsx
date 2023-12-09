import CatalogList from "../../components/CatalogComponents/CatalogList";
import Container from "../../components/Container";

export default function Favorite() {
return <Container>
<CatalogList isFavoritePage={true}/>
</Container>
}
