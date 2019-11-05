import React, {useState} from 'react';
import Template from "../Template/Template";
import * as langIndex from "../../lang";
import {Info_Proyectos} from "../../Models/Proyectos";
import {FaLock, FaLockOpen, FaGithub} from "react-icons/all";

const Principal = () => {
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
			<div className="color-3  marginBottom ">
				<div className="d-flex justify-content-between px-2 flex-wrap color-3">
					{
						(Info_Proyectos || []).map((proyecto, index) =>
							<div className="px-2 py-2  col-sm-6 col-md-4 col-lg-6 col-xl-3" key={index}>
								<Proyecto info={proyecto}/>
							</div>
						)
					}
				</div>
			</div>
		</Template>
	);
};

const Proyecto = ({info}) => {
	const [mostrar, setMostrar] = useState(false);
	return (
		<div className="card z-depth-3 border-5 ">
			<div className="card-header color-principal text-color-5 d-flex justify-content-between">
				<strong>{info.nombre}</strong>
				<div>
					{info.tipo === 'Privado' ? <FaLock/> : <FaLockOpen/>}
				</div>
			</div>
			<div className="card-body color-5 m-0 p-1">
				<div id={info.nombre} className="carousel slide" data-ride="carousel" data-interval="4000">
					<div className="carousel-inner">
						{(info.imagenes || []).map((img, index) =>
							<div className={`carousel-item  ${index === 0 ? 'active' : ''} `}>
								<img className={`d-block ${img.className}`} src={img.img} alt={img.alt}/>
							</div>
						)}
					</div>
					<a className="carousel-control-prev" href={`#${info.nombre}`} role="button"
					   data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href={`#${info.nombre}`} role="button"
					   data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<div>
					{!mostrar &&
					<h4 className="lenguaje text-color-principal" onClick={() => setMostrar(!mostrar)}>
						{info.lenguaje}
					</h4>
					}
					{
						mostrar &&
						<div className="infoProyecto" onClick={() => setMostrar(!mostrar)}>
							<h5>
								<a href={info.github}>
								<FaGithub/> 	{info.nombre}
								</a>
							</h5>
						</div>
					}
				
				</div>
			</div>
		</div>
	);
};

export default Principal;