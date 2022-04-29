const openMenu = document.getElementById("open-menu");
const close = document.getElementById("close-menu");

openMenu.addEventListener( "click",
function (){
    document.getElementById("hamburgeropen").style.display = "block";
}
)

close.addEventListener( "click",
function (){
    document.getElementById("hamburgeropen").style.display = "none";
}
)


