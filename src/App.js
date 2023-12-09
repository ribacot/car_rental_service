import { Route, Routes } from "react-router";
import Catalog from "./pages/Catalog/Catalog";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import Favorite from "./pages/Favorite/Favorite";
import ErrorPage from "./pages/ErrorPage/ErrorPage";



function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/favorite" element={<Favorite />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
}

export default App;
