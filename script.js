// Burger menu déroulant
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("dropdown");
    if (navLinks.classList.contains("dropdown")){
        menuToggle.classList.remove("fa-bars")
        menuToggle.classList.add("fa-xmark") 
    } 
    else {
        menuToggle.classList.remove("fa-xmark")
        menuToggle.classList.add("fa-bars")
    }
});
window.addEventListener('resize', () => {
    navLinks.classList.remove("dropdown")
    menuToggle.classList.remove("fa-xmark")
    menuToggle.classList.add("fa-bars")
});

// Modale contact
const dialog = document.querySelector("dialog");
const openModal = document.querySelector("#modal")
const closeModal = document.querySelector("#closeBtn")
openModal.addEventListener("click", () => {
    dialog.showModal()
})
closeModal.addEventListener("click", () => {
    console.log("close")
    dialog.close();
  });