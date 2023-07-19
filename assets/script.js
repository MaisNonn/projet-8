const slide = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*initialisation position*/
let position = 0;
function verifieposition(){
	if (position >= slide.length){
		position = 0;
	} else if (position < 0){
		position = slide.length - 1;
	}
}
/*création dots*/
const bullet = document.querySelector(".dots");
for (let i = 0; i < slide.length; i++){
	const point = document.createElement("div");
	bullet.appendChild(point);
	point.classList.add("dot");
}
/*séléction du points en fonction du slider*/
let bulletselect = positionbullet();
bulletselect.classList.add("dot_selected");
function positionbullet(){
	return document.querySelector(`.dots .dot:nth-child(${position + 1})`);
}
/*changement du point lors du slide*/
function changebullet(){
	bulletselect.classList.remove("dot_selected");
	bulletselect = positionbullet();
	bulletselect.classList.add("dot_selected");
}

/*affichage de l'image et de la tagline*/
function imageTagline(){
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slide[position].image;
	document.querySelector("#banner p").innerHTML = slide[position].tagLine;
}



  const left =document.getElementById("left");

  left.addEventListener("click", function(){
	changementSlide(-1);
  });
  
  const right =document.getElementById("right");

  right.addEventListener("click", function(){
	changementSlide(+1);
  });
  /*changement de slide*/
  function changementSlide(direction){
	position += direction;
	verifieposition();
	imageTagline();
	changebullet();
  }




