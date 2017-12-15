var map = new Map("premiere");

 
var CordX = sessionStorage.getItem('X');// on recupere les coordX du personngae 
var CordY = sessionStorage.getItem('Y');// on recupere les coordY du personngae 
var SEN = sessionStorage.getItem('SENS'); // on recupere la Direction du personngae 

if ((CordX != null)&&(CordY != null)) {
	// si la condition est vrai, on applique les coord recupere dans sessionStorage
	var joueur = new Personnage("mage.png", CordX, CordY, SEN);
	console.log("elle est vrai"); 
	console.log(CordX,CordY);
	console.log(SEN);
	sessionStorage.clear();// on vide le sessionStorage de toutes ces variable 
} else {
	// sinon on applique les coord de depart
	var joueur = new Personnage("mage.png", 5, 14, DIRECTION.BAS);
	console.log("elle est fausse");
	console.log(CordX,CordY);
	console.log(SEN);
};

//var joueur = new Personnage("angel2.png", 5, 14, DIRECTION.BAS);

//console.log("CordX");
//console.log(CordX);

map.addPersonnage(joueur);

window.onload = function() {
	var canvas = document.getElementById('canvas');
	
	var ctx = canvas.getContext('2d');
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;


	setInterval(function() {
		map.dessinerMap(ctx);
		
	}, 25);
	
	// Gestion du clavier
	window.onkeydown = function(event) {
		// On récupère le code de la touche
		var e = event || window.event;
		var key = e.which || e.keyCode;
		
		switch(key) {
			case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
				joueur.deplacer(DIRECTION.HAUT, map);
				break;
			case 40 : case 115 : case 83 : // Flèche bas, s, S
				joueur.deplacer(DIRECTION.BAS, map);
				break;
			case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
				joueur.deplacer(DIRECTION.GAUCHE, map);
				break;
			case 39 : case 100 : case 68 : // Flèche droite, d, D
				joueur.deplacer(DIRECTION.DROITE, map);
				break;
			default : 
				//alert(key);
				// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
				return true;
		}
		
		return false;
	}
}
