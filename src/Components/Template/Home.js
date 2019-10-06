import React from 'react';
import {useState} from 'react';
import * as langIndex from "../../lang";
import Template from "./Template";

const Home = () => {
	
	//|------Init------|//
	
	const [lang, setLang] = useState({get: (key) => key});
	const [lang_ok, setLangOk] = useState(false);
	
	const consultaLang = () => {
		langIndex.cargarLang((result) => {
			setLang(langIndex);
			setLangOk(true);
		});
	};
	
	if (!lang_ok) {
		consultaLang();
	}

//|------./Init------|//
	return (
		<Template lang={lang}
				  lang_ok={lang_ok}>
			hola
		</Template>
	);
};

export default Home;