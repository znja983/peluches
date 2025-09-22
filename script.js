const peluches = [
  {
    nombre: "Osito Cariñosito",
    descripcion: "Suave, tierno y siempre sonriente.",
    imagen: "https://via.placeholder.com/200x200?text=Osito"
  },
  {
    nombre: "Conejito Saltarín",
    descripcion: "Perfecto para abrazos largos.",
    imagen: "https://via.placeholder.com/200x200?text=Conejito"
  },
  {
    nombre: "Panda Dormilón",
    descripcion: "Ideal para siestas y mimos.",
    imagen: "https://via.placeholder.com/200x200?text=Panda"
  }
];

const container = document.getElementById("peluche-container");

peluches.forEach(peluche => {
  const div = document.createElement("div");
  div.className = "peluche";
  div.innerHTML = `
    <img src="${peluche.imagen}" alt="${peluche.nombre}">
    <h3>${peluche.nombre}</h3>
    <p>${peluche.descripcion}</p>
  `;
  container.appendChild(div);
});
