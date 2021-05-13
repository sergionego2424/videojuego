const playerCoords = {
	x : 200,
	y: -300
}
const teclado = () => {
	return document.addEventListener('keydown' , (tecla) => {
		//console.log(tecla.keyCode);
		switch(tecla.keyCode){
			case 37 : 
				playerCoords.x -= 5;
			break;
			case 39 : 
				playerCoords.x += 5;
			break;
		}
	});
}

teclado();



export default playerCoords;
