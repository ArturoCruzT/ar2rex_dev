import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Template = (props) => {
	return (
		<div>
			<Navbar lang={props.lang} lang_ok={props.lang_ok}/>
			{props.children}
			<Footer/>
		</div>
	);
};

export default Template;