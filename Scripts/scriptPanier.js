let cart_quantities = document.querySelectorAll('.quantity'); // récupération des quantités
cart_quantities.forEach(cart_quantity => { // boucle sur les quantités
    cart_quantity.addEventListener("change", calculTotalLine); // écouteur d'événement
});

let price = document.querySelectorAll('.price').getAttribute("data-price"); // récupération des prix

document.getElementById("total").innerText = price * cart_quantities + "€"; // affichage du total de la ligne



