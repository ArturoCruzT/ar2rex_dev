import React, {useState} from 'react';
import foto_perfil from '../../Img/arturoc.jpg';
import Background from "../../Img/cube.jpg";
import Encabezado from "./Encabezado";
import {Info_es, Info_en} from "../../Models/DatosPersonales";
import Cintillo from "./Cintillo";
import ImgCintillo from "../../Img/cintillo.jpg";
import PanelIzquierda from "./PanelIzquierda";
import PanelDerecha from "./PanelDerecha";

const Plantilla = ({lang}) => {
	//|------Hooks------|//
	const [info, setInfo] = useState({});

//|------UseEffects------|//

//|------Funciones------|//
	//|------GUI------|//
	//|------API------|//
	//|------Operaciones------|//

//|------DatosIniciales------|//
	if (info.nombre) setInfo(Info_es);
//|------Render------|//
	return (
		<div className="pb-5 mb-5">
			<div className="d-flex justify-content-between">
				<Cintillo className="tamano3" imagen={ImgCintillo}/>
				<div className="tamano97">
					<Encabezado info={Info_es} foto={foto_perfil} Background={Background}/>
					<div className="d-flex justify-content-between">
						<PanelIzquierda info={Info_es} Background={Background} lang={lang}/>
						<PanelDerecha info={Info_es} lang={lang} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plantilla;