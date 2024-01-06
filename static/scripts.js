document.addEventListener("DOMContentLoaded", () => {
  // Selecciona los elementos
  const back = document.getElementById("back");
  const hamburguesa = document.getElementById("hamburguesa");
  const navbar = document.getElementById("myNavbar");
  const form_container = document.getElementById("form_container");

  // Asigna los roles ARIA directamente en el HTML
  navbar.setAttribute("role", "navigation");
  hamburguesa.setAttribute("role", "button");


  // Agrega los event listeners
  if(back) {
      back.addEventListener("click", () => {
        window.history.back();
      });
  }

// Fucion cambiar estilo

let aparecerDesaparecer = () => {
    if(navbar.style.display === "flex") {
        return "none";
    } else {
        return "flex";
    }
}


  // Función para manejar la apertura/cierre del menú

hamburguesa.addEventListener("click", () => {
    navbar.style.display = aparecerDesaparecer();
});


});
