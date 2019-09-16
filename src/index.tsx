import { h, render } from "preact";
import SomeComponent from "./components/SomeComponent/SomeComponent";
import "./styles/index.scss";

render(
	<SomeComponent compiler="TypeScript" framework="Preact" />,
	document.querySelector("#root"),
);
