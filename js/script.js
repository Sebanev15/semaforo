const circulo1 = document.getElementById("primero");
const circulo2 = document.getElementById("segundo");
const circulo3 = document.getElementById("tercero");
const texto = document.getElementById("textoCartel");
let color = "verde";

setInterval(() => {
    switch (color) {
        case "verde":
            circulo1.setAttribute("class", "verde");
            circulo2.setAttribute("class", "naranjaApagado");
            circulo3.setAttribute("class", "rojoApagado");
            texto.style.color = "rgb(66, 255, 66)";
            texto.innerHTML = "¡Pase!";
            color = "naranja";
            break;
        case "naranja":
            circulo1.setAttribute("class", "verdeApagado");
            circulo2.setAttribute("class", "naranja");
            circulo3.setAttribute("class", "rojoApagado");
            texto.style.color = "rgb(255, 107, 53)";
            texto.innerHTML = "¡Tenga cuidado!";
            color = "rojo";
            break;
        case "rojo":
            circulo1.setAttribute("class", "verdeApagado");
            circulo2.setAttribute("class", "naranjaApagado");
            circulo3.setAttribute("class", "rojo");
            texto.style.color = "rgb(255, 46, 46)";
            texto.innerHTML = "¡Espere!";
            color = "verde";
            break;
    }
}, 1000);