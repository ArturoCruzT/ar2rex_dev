import React from 'react';

const PanelIzquierda = ({info, Background, lang}) => {
	return (
		<div style={{
			backgroundImage: `url(${Background})`,
		}} className="linea-right-5">
			<div>
				<div className="text-center">
					<h2 className="linea-bottom-5">
						{lang.get('curriculum.contacto')}
					</h2>
				</div>
				{
					(info.contacto || []).map((registro, index) =>
						<div key={`con${index}`}>
							<RenglonPersonal
								titulo={registro.nombre}
								texto={registro.descripcion}
								icon={registro.icono}
							/>
						</div>
					)
				}
				
				
				<div className="text-center">
					<h2 className="linea-bottom-5">
						{lang.get('curriculum.habilidades')}
					</h2>
				</div>
				{
					(info.habilidades || []).map(habilidad =>
						<div>
							<RenglonPersonal
								titulo={habilidad.nombre}
								texto={habilidad.nivel}
								icon={habilidad.icono}
							/>
						</div>
					)
				}
				<div className="text-center">
					<h2 className="linea-bottom-5">
						{lang.get('curriculum.idiomas')}
					</h2>
				</div>
				{
					(info.idiomas || []).map((idiomas, index) =>
						<div key={`id${index}`}>
							<RenglonPersonal
								titulo={idiomas.nombre}
								texto={idiomas.nivel}
								icon=""
							/>
						</div>
					)
				}
			</div>
		</div>
	);
};


const RenglonPersonal = ({titulo, texto, icon}) => {
	return (
		<div className="d-flex justify-content-between py-2 pr-2">
			<div className="px-2 ">
				<div className="px-2 d-flex justify-content-start">
					<div className="pr-2 ">
						{icon}
					</div>
					
					<h5 className="pt-1"><strong>{titulo} </strong></h5>
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{texto}
			</div>
		</div>
	)
};
export default PanelIzquierda;