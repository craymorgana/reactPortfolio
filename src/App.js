import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Resume from './pages/Resume'
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
					<Route path="/Resume" element={<Resume />} />
					<Route path="*" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
