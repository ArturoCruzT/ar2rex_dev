import React, {useState} from 'react';
import Template from "../Template/Template";
import * as langIndex from "../../lang";
import Plantilla from "./Plantilla";

const Curriculum = () => {
	//|------Init------|//
	
	const [lang, setLang] = useState({get: (key) => key});
	const [lang_ok, setLangOk] = useState(false);
	
	const consultaLang = () => {
		langIndex.cargarLang((result) => {
			setLang(langIndex);
			setLangOk(true);
		});
	};
	
	if (!lang_ok) consultaLang();

//|------./Init------|//
	return (
		<Template lang={lang} lang_ok={lang_ok}>
			<div>
				<Plantilla lang={lang}/>
			</div>
		</Template>
	);
};

export default Curriculum;