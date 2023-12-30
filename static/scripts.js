document.addEventListener("DOMContentLoaded", function() {

    let back = document.getElementById("back");

    back.addEventListener("click", ()=> {
            window.history.back();
    });

    let hamburguesa = document.getElementById("hamburguesa");

    const navbar = document.getElementById("navbar");

    function menu(){
        if(window.innerWidth < 500){
            navbar.classList.add("desaparecer")
            hamburguesa.classList.remove("desaparecer")
            hamburguesa.classList.add("aparecer")
        } else {
            navbar.classList.remove("desaparecer")
            navbar.classList.add("aparecer")
            hamburguesa.classList.add("desaparecer")
        }
        // Agregar atributo role
      navbar.setAttribute("role", "navigation");
      hamburguesa.setAttribute("role", "button");

    }

    hamburguesa.addEventListener("click", menu);

    window.addEventListener("resize", menu);
    menu();

    document.addEventListener("DOMContentLoaded", function() {
        let images = [
            'images/11.jpg',
            'images/12.jpg',
            'images/13.jpg',
            'images/14.jpg',
        ]

        let form_container = document.getElementById("form_container");
        let imagenAleatoria = images[Math.floor(Math.random() * images.length)];

        form_container.style.backgroundImage = `url(${imagenAleatoria})`;
    })

});