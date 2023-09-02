



var home= document.getElementById("Home-section");
var journey=document.getElementById("Journey-section");
var reserve=document.getElementById("Reserve-section");
var product=document.getElementById("Product-section");
var bootsrapButton=document.getElementById("BootsrapButton");

document.getElementById("HomeButton").addEventListener('click',()=>home.scrollIntoView({ behavior: 'smooth' }));
document.getElementById("JourneyButton").addEventListener('click',()=>journey.scrollIntoView({ behavior: 'smooth' }));
document.getElementById("ReserveButton").addEventListener('click',()=>reserve.scrollIntoView({ behavior: 'smooth' }));
document.getElementById("ProductButton").addEventListener('click',()=>product.scrollIntoView({ behavior: 'smooth' }));




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bootsrapButton.style.display = "block";
  } else {
    bootsrapButton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }
