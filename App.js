//creer une fonction et recuperer les élément des la HTML par id//
function verifyallinput() {
  const firstname = document.getElementById("first-name");
  const lastname = document.getElementById("last-name");
  const message = document.getElementById("message");
  const error = document.getElementById("error-message");
  // Vérifier les conditions//
  if (firstname.value == "" || lastname.value == "" || message.value == "") {
    error.style.display = "block";
  } // NONE#BLOCK//
  else {
    error.style.display = "none";
  }
}
//Vérifier les condition
