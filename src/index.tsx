import { h, render } from "preact"
import { Hello } from "./components/Hello"

render(<Hello compiler="TypeScript" framework="Preact" />, document.querySelector("#root"));