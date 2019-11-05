import React from 'react';

const Trabajo = ({trabajo}) => {
	return (
		<div>
			<div className="d-flex justify-content-start">
				<div className="px-4"><h3>{trabajo.empresa}</h3></div>
				<div className="py-2"> {trabajo.puesto}</div>
			</div>
			<div className="text-info px-5">
				{trabajo.periodo}
			</div>
			<div className="px-5">
				<ul>
					{
						(trabajo.actividades).map((actividad, index) =>
							<li>
								{actividad.descripcion}
							</li>
						)
					}
				</ul>
			</div>
		</div>
	);
};

export default Trabajo;