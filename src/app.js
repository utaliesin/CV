import { JSX } from "./base.js";
import Sidebar from "./sidebar.js";
import MainContent from "./main.js";

const app = JSX("div", {
	class: "cv-container",
	style: {
		display: "flex",
		minHeight: "100vh",
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#f5f5f5",
		margin: "0",
		padding: "20px",
		boxSizing: "border-box",
	},
	children: [
		JSX("div", {
			style: {
				display: "flex",
				maxWidth: "1200px",
				width: "100%",
				margin: "0 auto",
				backgroundColor: "white",
				boxShadow: "0 0 20px rgba(0,0,0,0.1)",
				borderRadius: "8px",
				overflow: "hidden",
			},
			children: [Sidebar, MainContent],
		}),
	],
});

console.log(app);

document.getElementById("app").appendChild(app)
