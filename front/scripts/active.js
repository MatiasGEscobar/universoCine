const active = () => {

const lista = document.getElementById("list");

const paginas = ["Página 1", "Página 2", "Página 3", "Página 4", "Página 5"]

paginas.forEach((pagina) => {
    const li = document.createElement("li");
    li.innerHTML = pagina;
    li.classList.add("list-group-item");
    li.ariaCurrent = "true";

    li.addEventListener("mouseenter", (event) => {
        event.target.classList.add("active");
    });

    li.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("active");
    });

    lista.appendChild(li);
})
}

Module.exports = {active};