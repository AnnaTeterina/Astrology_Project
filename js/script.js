let buttonArticles = document.getElementById("buttonArticles")
let buttonMeditations = document.getElementById("buttonMeditations")
let articles_block = document.getElementById("articles")
let meditations_block = document.getElementById("meditations")

function clickedButtonAsrticles() { 
    buttonArticles.classList.add("button_clicked");
    buttonMeditations.classList.remove("button_clicked");
    meditations_block.classList.add("non_active")
    articles_block.classList.remove("non_active");
}

function clickedButtonMeditations() { 
    buttonMeditations.classList.add("button_clicked");
    buttonArticles.classList.remove("button_clicked");
    articles_block.classList.add("non_active");
    meditations_block.classList.remove("non_active")
}

function btnCopy() {
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
 
  copyToClipboard(".copyText");
}

jQuery(document).ready(function($){
    $("#moreVideos").click(function(e){
      $(".videos:hidden").slice(0,1).fadeIn();
      if ($(".videos:hidden").length < 1) $(this).fadeOut();
    })
  })