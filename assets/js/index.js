document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto-afs.firebaseio.com/');
  db.download('/', function(data) {
    context=data; 
    coDesReplace('.categorias', context);
  });
})