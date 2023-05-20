var icon = document.getElementById("icon-1");
icon.addEventListener("click" , hideMenu);
icon.addEventListener("dblclick" , showMenu);

function hideMenu() {
    var box = document.getElementById("box-1").style.display="none";
}

function showMenu() {
    var box = document.getElementById("box-1").style.display="block";
}