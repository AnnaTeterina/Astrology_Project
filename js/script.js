let buttonArticles = document.getElementById("buttonArticles")
let buttonMeditations = document.getElementById("buttonMeditations")

function clickedButtonAsrticles() { 
    buttonArticles.classList.add("button_clicked");
    buttonMeditations.classList.remove("button_clicked")
}

function clickedButtonMeditations() { 
    buttonMeditations.classList.add("button_clicked");
    buttonArticles.classList.remove("button_clicked")
}

