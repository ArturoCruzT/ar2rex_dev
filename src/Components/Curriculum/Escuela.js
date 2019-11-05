import React from 'react';

const Escuela = ({escuela}) => {
	return (
		<div className="d-flex justify-content-start">
			<div style={{fontSize: '.8rem'}} className="px-2 w-25">
				<div>
					{escuela.periodo}
				</div>
				<div>
					{escuela.ubicacion}
				</div>
			</div>
			<div>
				<div>
					<strong>{escuela.nombre}</strong>
				</div>
				<div>
					{escuela.titulo}
				</div>
			</div>
		</div>
	);
};

export default Escuela;