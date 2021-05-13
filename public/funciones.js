let plataformas = [];

const plataformasInfinitas = (x,physics) => {
	setInterval(() => {
		x = Math.random() * 1000;
		plataformas.push(physics.add.image(x, 0, 'barra').setDisplaySize(200, 200));
	},2000);	

}



export  {plataformasInfinitas, plataformas};