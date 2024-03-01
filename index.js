document.addEventListener("DOMContentLoaded", function() {
     let menuItems = document.querySelectorAll(".menu ul li a");
     let currentUrl = window.location.href;
 
     menuItems.forEach(function(menuItem) {
         if (menuItem.href === currentUrl) {
             menuItem.classList.add("active");
         }
     });
 });
 

function browseBtn() {
    document.location = "./designs.html";
}

function toggleMenu() {
     var menu = document.getElementById("menu");
     menu.classList.toggle("active");
 
     var barsIcon = document.querySelector(".hamburger-menu .fa-bars");
     var closeIcon = document.querySelector(".hamburger-menu .fa-x");
 
     barsIcon.style.display = menu.classList.contains("active") ? "none" : "block";
     closeIcon.style.display = menu.classList.contains("active") ? "block" : "none";
 }
 