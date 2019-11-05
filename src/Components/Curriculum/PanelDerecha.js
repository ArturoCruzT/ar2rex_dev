import React from 'react';
import Trabajo from "./Trabajo";
import Escuela from "./Escuela";

const PanelDerecha = ({info, lang}) => {
	return (
		<div className="w-100">
			<div className="text-center" style={{'border-bottom': '5px solid #0d47a1'}}>
				<h3>
					{lang.get('curriculum.experienciaLaboral')}
				</h3>
			</div>
			<div>
				{
					(info.trabajos || []).map((trabajo, index) =>
						<div>
							{
								index < 2 && <Trabajo trabajo={trabajo}/>
							}
						</div>
					)
				}
			</div>
			<div className="text-center" style={{'border-bottom': '5px solid #0d47a1'}}>
				<h3>
					{lang.get('curriculum.educacion')}
				</h3>
			</div>
			<div className="pb-5">
				{
					(info.estudios || []).map(escuela =>
						<Escuela escuela={escuela}/>
					)
				}
			</div>
		</div>
	);
};

export default PanelDerecha;