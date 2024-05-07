function validateForm() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var motivo = document.getElementById("motivo").value;
  var barrio = document.getElementById("barrio").value;
  var telefono = document.getElementById("telefono").value;

  if (
    nombre === "" ||
    email === "" ||
    mensaje === "" ||
    motivo === "" ||
    barrio === "" ||
    telefono === ""
  ) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }
  return true;
}
