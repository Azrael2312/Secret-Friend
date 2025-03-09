// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Store the list of friends in an array
const amigos = [];

// Function to add a friend to the list
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validate that the input is not empty
    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre válido.")
        return; 
    }

    // Add the friend to the array.
    amigos.push(nombreAmigo);

    // Update the displated list
    actualizarListaAmigos();

    // Clear the input field
    inputAmigo.value = "";
    inputAmigo.focus(); // Put the cursor back in the input field
}

// Function to update the display4ed list of friends
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Clear the current list.

    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-list-item"); // Add class for styling
        listaAmigos.appendChild(li);
    }
}

// Function to perform the random draw.
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; //clear previous results

    if (amigos.length === 0) {
        alert("La lista de amigos está vacía, Añade algunos nombres");
        return;
    }

    // Randomly select a friend
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Display the result.
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    li.classList.add("result-list-item");
    resultado.appendChild(li);
}

// Add event listener for "Enter" key in the input field
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});