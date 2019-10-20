import Home from "./Components/Template/Home";
import Curriculum from "./Components/Curriculum/Curriculum";
import Proyectos from "./Components/Proyectos/Principal";

const ROUTES = [
	{ path: '/proyectos', component: Proyectos },
	{ path: '/curriculum', component: Curriculum },
	{ exact: true, path: '/', component: Home }
];

export default ROUTES;