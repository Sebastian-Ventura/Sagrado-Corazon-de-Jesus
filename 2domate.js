//SEGUNDO MATEMATICA 1RA UNIDAD//
function mostrar(id) {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
