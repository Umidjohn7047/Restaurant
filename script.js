window.onscroll = function(){scrollFunction()};
const navbar = document.getElementById('navbar').style;
function scrollFunction(){
    if(document.documentElement.scrollTop > 50){
        navbar.borderBottom  = "2px #ffc200 solid";
        navbar.backdropFilter = "blur(10px)";
        navbar.background = "rgba(0,0,0,0.5)";
    }else{
        navbar.borderBottom  = "2px transparent solid";
        navbar.backdropFilter = "blur(0px)";
        navbar.background = "transparent";
    }
}

AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000
});

document.getElementById("go-form").addEventListener("click",popup)
function popup(){
    document.getElementById("popup").style.transform = "scale(1)";
}
document.getElementById('back').addEventListener('click',()=> {
    document.getElementById("popup").style.transform = "scale(0)";
})