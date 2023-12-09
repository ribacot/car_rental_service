import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

export default function SharedLayout() {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<h1>Load...</h1>}>{<Outlet />}</Suspense>
			</main>
		</>
	);
}
