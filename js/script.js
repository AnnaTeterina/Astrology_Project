let buttonArticles = document.getElementById("buttonArticles")
let buttonMeditations = document.getElementById("buttonMeditations")
let articles_block = document.getElementById("swiper")
let meditations_block = document.getElementById("meditations")

function clickedButtonAsrticles() { 
    buttonArticles.classList.add("button_clicked");
    buttonMeditations.classList.remove("button_clicked");
    //meditations_block.classList.add("non_active")
    //articles_block.classList.remove("non_active");
    articles_block.style.display = 
}

function clickedButtonMeditations() { 
    buttonMeditations.classList.add("button_clicked");
    buttonArticles.classList.remove("button_clicked");
    //articles_block.classList.add("non_active");
    //meditations_block.classList.remove("non_active")
}

