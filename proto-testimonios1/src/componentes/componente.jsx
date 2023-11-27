import React from "react";

function Testimonio() {
	return (
		<div className='contenedorTestimonio' > 
			<img className='imagenTestimonio' src={require('../imagenes/lucho.jpg')} alt='Foto de Lucho.' />
			<div className='contenedorCuadroTextos'>
				<p className='nombreFulano'>Lucho</p>
				<p className='datosFulano'>Profesor de Matemáticas Avanzadas</p>
				<p className='comentarioFulana'>Pues, ¿sabes? El cambio climático... es como cuando sumas dos números y te da un resultado negativo. Algo así, ¿no? Como una resta que, bueno, hace que la Tierra esté más fría o más caliente, depende. ¡Pero tranquilo, que las mates siempre tienen la respuesta, eh!</p>
			</div>
		</div>
	);
}//proto-testimonios1\src\imagenes\lucho.jpg

export default Testimonio;