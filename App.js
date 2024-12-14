
function verifyallinput() { //Permet de verifier les formulaires vides)
  const firstname = document.getElementById("first-name");//creer une fonction et recuperer les élément des la HTML par id//
  const lastname = document.getElementById("last-name");
  const message = document.getElementById("message");
  const error = document.getElementById("error-message");
  // Vérifier les conditions//
  if (firstname.value == "" || lastname.value == "" || message.value == "") {
    error.style.display = "block";
  } // NONE#BLOCK pour changer le style dans HTML//
  else {
    error.style.display = "none";
    addelementtolistofcomment (firstname.value ,lastname.value , message.value) // appel la fonction addelement to assigne attRibut in fonction//
    firstname.value = ""; //renitialiser les formulaires//
    lastname.value  = ""; 
    message.value = ""

}
}


function addelementtolistofcomment(firstname , lastname , message){
    const commentlist = document.getElementById("comment-list");
    const commentdiv = document.createElement("div")   // Creer une balise div HTML//
    const newcomment =`<div class="flex space-x-4 text-sm text-gray-500">
                <div class="flex-1 py-10 ">
                  <h3 class="font-medium text-gray-900">${firstname} ${lastname}</h3>
                  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                  </div>
                </div>
              </div>`
    commentdiv.innerHTML = newcomment // Permet d'inserer un texte dans HTML//
    commentlist.appendChild(commentdiv)   // APPENDDCHILD permet d'inserer un nouveau dans la classe mère//
    
}
