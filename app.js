document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado correctamente!");

    const titulo = document.querySelector("h1");
    titulo.addEventListener("click", () => {
        alert("¡Le diste click al título!");
    });
});
