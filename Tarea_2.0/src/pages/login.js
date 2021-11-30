function Validar() {
  usuario = document.getElementById("txtusuario").value;
  pass = document.getElementById("txtpass").value;

  if (usuario == "admin" && pass == "123") {
    swal({
      title: "Bienvenido " + usuario,
      text: "Sesión iniciada con éxito!",
      icon: "success",
    }).then(() => {
      Limpiar();
      window.location.href = "../index.html";
    });
  } else {
    swal({
      title: "Error",
      text: "Nombre de usuario o cotraseña inválidos.",
      icon: "error",
    }).then(Limpiar());
  }
}

function Limpiar() {
  document.getElementById("txtusuario").value = "";
  document.getElementById("txtpass").value = "";
  document.getElementById("txtusuario").focus();
}
