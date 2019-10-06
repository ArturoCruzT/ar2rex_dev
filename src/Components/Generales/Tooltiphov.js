import React from 'react';
import {OverlayTrigger, Tooltip } from "react-bootstrap";

const Tooltiphov = ({ placement, texto, children}) => {
	return (
		<OverlayTrigger
			key={`tooltipHov${Math.random()}`}
			placement={placement}
			overlay={
				<Tooltip id={`tooltip-${placement}`}>
					{texto}
				</Tooltip>
			}
		>
			{children}
		</OverlayTrigger>
	)
};

export default Tooltiphov;