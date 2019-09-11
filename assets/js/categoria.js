document.addEventListener("DOMContentLoaded", function() {
  let params = coDesExtract()
  let value= params['categoria']
  let db = coDesConnect("https://projeto-afs.firebaseio.com/");
  db.download("/", function(data) {
    context = data["portfolio"][value]
    coDesReplace('.body', context)
  });
})
