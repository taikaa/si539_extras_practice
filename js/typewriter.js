var i = 0;
var title = 'About me';
var speed = 50;

function typeWriter() {
// 	//adjust for if the user prefers reduced motion
	if (window.matchMedia('(prefers-reduced-motion)')) {
    document.querySelector('.typerwriter').innerHTML = "About me";
   
}
    else if (i < title.length) {
    document.querySelector('.typewriter').innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 
