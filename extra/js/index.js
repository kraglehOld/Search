/** Generate A Random Background Image */
var height = window.innerHeight;
var width = window.innerWidth;
var link = `https://picsum.photos/${width}/${height}`;
console.info(link);
document.body.style.backgroundImage = `url(${link})`;
