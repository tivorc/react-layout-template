import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Layout from "./layout";

import "./styles.scss";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Layout>
	);
}

export default App;
