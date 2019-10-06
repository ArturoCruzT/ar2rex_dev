import React from 'react';
import {useState} from 'react';
import * as langIndex from "../../lang";
import Template from "./Template";
import {esCelular} from "../../Helpers/GeneralHelper";
import principal1 from "../../Img/principal-1.jpg";
import principal2 from "../../Img/principal-2.jpg";
import principal3 from "../../Img/principal-3.jpg";


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
			<div className="color-secudario vh-80">
				<div className="container">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className={`d-block w-100  ${esCelular()? "vh-25" : "vh-80"}`} src={principal1} alt="First slide"/>
							</div>
							<div className="carousel-item">
								<img className={`d-block w-100  ${esCelular()? "vh-25" : "vh-80"}`} src={principal2} alt="Second slide"/>
							</div>
							<div className="carousel-item">
								<img className={`d-block w-100  ${esCelular()? "vh-25" : "vh-80"}`} src={principal3} alt="Third slide"/>
							</div>
						</div>
						<a className="carousel-control-prev" href="#carouselExampleControls" role="button"
						   data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleControls" role="button"
						   data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</Template>
	);
};

export default Home;