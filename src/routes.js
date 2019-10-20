import Home from "./Components/Template/Home";
import Curriculum from "./Components/Curriculum/Curriculum";

const ROUTES = [
	{ path: '/curriculum', component: Curriculum },
	{ exact: true, path: '/', component: Home }
];

export default ROUTES;