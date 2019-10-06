import React from 'react';
import {NavLink} from 'react-router-dom';
import { DiReact } from "react-icons/di";
import { FaHome , FaUserAlt } from "react-icons/fa";
import rex from "../../Img/rex.png";

function Navbar({lang,  lang_ok}) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light color-principal">
				<NavLink className="navbar-brand text-white" to="#"><img style={{width:'30px' , height:'30px'}} src={rex}/>{process.env.REACT_APP_APP_NAME}</NavLink>
				<button className="navbar-toggler text-white" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink className="nav-link text-white" to="/"><span> <FaHome/>  </span>Home <span className="sr-only">(current)</span></NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="#">Link</NavLink>
						</li>
						<li className="nav-item dropdown">
							<NavLink className="nav-link text-white dropdown-toggle" to="#" id="navbarDropdown" role="button"
							   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown
							</NavLink>
							<div className="dropdown-menu text-white" aria-labelledby="navbarDropdown">
								<NavLink className="dropdown-item" to="#">Action</NavLink>
								<NavLink className="dropdown-item" to="#">Another action</NavLink>
								<div className="dropdown-divider"></div>
								<NavLink className="dropdown-item" to="#">Something else here</NavLink>
							</div>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

const Env = ({env}) => {
	if (env !== 'prod') {
		const tipo_badge = env === 'dev' ? 'warning' : 'danger';
		return (
			<span className={`p-1 ml-1 badge badge-${tipo_badge}`}>{env}</span>
		);
	}
};

export default Navbar;
