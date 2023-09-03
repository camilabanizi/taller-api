const searchButton = document.getElementById("searchButton");
const personajeInfo = document.getElementById("personajeInfo");

searchButton.addEventListener("click", async () => {
  const characterNumber = document
    .getElementById("characterNumber")
    .value.toLowerCase();
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterNumber}`
    );
    const data = await response.json();

    const numeroPersonaje = data.id;
    const imagenPersonaje = data.image;
    const nombrePersonaje = data.name.toUpperCase();
    const especiePersonaje = data.species;
    const especieStatus = data.status;

    const html = `
      <div class="container-info">
      <img src="${imagenPersonaje}" alt="${nombrePersonaje}">
      <h2>${nombrePersonaje}</h2>
      <p><strong>Número:</strong> ${numeroPersonaje}</p>
      <p><strong>Especie:</strong> ${especiePersonaje}</p>
      <p class="status"><strong>Estatus:</strong> ${especieStatus}</p>
      </div>
    `;

    personajeInfo.innerHTML = html;
    personajeInfo.style.display = "block";
  } catch (error) {
    personajeInfo.innerHTML = "Personaje no encontrado.";
    personajeInfo.style.display = "block";
  }
});
