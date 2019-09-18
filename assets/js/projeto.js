var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

document.addEventListener("DOMContentLoaded", function() {
  let params = coDesExtract();
  let categoria = params["categoria"];
  let projeto = params["projeto"];
  let db = coDesConnect("https://projeto-afs.firebaseio.com/");
  db.download("/", function(data) {
    context = data["portfolio"][categoria]["projetos"][projeto];

    //separa os nomes dos integrantes da equipe em uma lista
    var nomes = context["equipe"].split(",");
    //separa os links das imagens dos integrantes em uma lista (estão equivalentes à ordem que os nomes foram escritos)
    var fotos = context["equipei"].split(",");
    //adiciona a chave equipes ao projeto
    context["equipes"]={}
    let i=0;

    for (let nome of nomes){
      //cria um dicionario do membro que conterá o nome e o link da sua foto
      let membro = {}
      membro["nome"] = nome;
      membro["equipei"] = fotos[nomes.indexOf(nome)]
    	context["equipes"][i]=membro;
    	i=i+1;
    }
    console.log(context)
    coDesReplace('.body', context)

    slideIndex = 1;
    showSlides(slideIndex);
  });
})
