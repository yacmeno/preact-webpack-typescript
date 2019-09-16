import { h } from "preact";

interface HelloProps {
	compiler: string;
	framework: string;
}

const SomeComponent = (props: HelloProps) => (
	<h1 class="some-component--green">
		Hello from {props.compiler} and {props.framework}!
	</h1>
);

export default SomeComponent;
