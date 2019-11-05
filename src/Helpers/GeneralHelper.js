
export const esCelular = () =>{
	let es_celular = false;
	
	if(navigator.userAgent.match(/Android/i))
		es_celular = true;
	if(navigator.userAgent.match(/iPhone|iPad|iPod/i))
		es_celular = true;
	return es_celular;
};