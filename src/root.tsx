import { Card } from "./components/card/card";
import { Counter } from "./components/counter/counter";
import { Heading } from "./components/heading/heading";
import { Logo } from "./components/logo/logo";

export default () => {
	return (
		<>
			<head>
				<meta charset="utf-8" />
				<title>Qwik Blank App</title>
			</head>
			<body>
				<Logo />
				<Counter />
				<Card horizontal>
					<Heading>First heading of BonoboUI</Heading>
				</Card>
			</body>
		</>
	);
};
