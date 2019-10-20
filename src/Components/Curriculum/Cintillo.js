import React from 'react';

const Cintillo = ({imagen,className}) => {
	return (
		<div className={className} style={{ backgroundImage: `url(${imagen})`}}>
		</div>
	);
};

export default Cintillo;