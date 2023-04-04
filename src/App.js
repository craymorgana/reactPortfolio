import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="App d-flex justify-content-center">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/logout" element={<Home />} />
					<Route path="*" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
