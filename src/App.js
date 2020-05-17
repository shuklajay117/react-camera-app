import React from "react";

import './App.scss';
import { useRoutes } from "hookrouter";
import NotFound from "./components/NotFound";
import Gcd from "./components/Gcd";
import CaptureImg from "./components/CaptureImg";
import PrimeNumber from "./components/PrimeNumber";
import Navigation from "./components/Navigation";

const routes = {
	'/': () => <Gcd />,
	'/captureimg': () => <CaptureImg />,
	'/primenum': () => <PrimeNumber />,
};

export default function App() {

	const routeResult = useRoutes(routes);

	return (
		<div className="app-container">
			{routeResult && <Navigation />}
			{routeResult || <NotFound />}
		</div>
	);
}