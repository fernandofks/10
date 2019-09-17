document.addEventListener("DOMContentLoaded", function() {
  let params = coDesExtract()
  let categoria= params['categoria']
  let projeto= params['projeto']
  let db = coDesConnect("https://projeto-afs.firebaseio.com/");
  db.download("/", function(data) {
    context = data["portfolio"][categoria]['projetos'][projeto]


    var retorno = context["equipe"].split(",");
    context["equipes"]={}
    let i=0;

    for (let nome of retorno){

    	context["equipes"][i]=nome;
    	i=i+1;
    }
    console.log(context)
    coDesReplace('.body', context)
  


  });

})
