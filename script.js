var aux = 0;
function hamburguerMenu() {
     var navbar = document.getElementById('navbar')

     if (aux == 0) {
          navbar.style.display = "flex";
          aux = 1;
     }
     else{
          navbar.style.display = "none";
          aux = 0;
     }
}