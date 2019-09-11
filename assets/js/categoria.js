document.addEventListener("DOMContentLoaded", function() {
  let db = coDesConnect("https://projeto-afs.firebaseio.com/");
  db.download("/portfolio/", function(data) {
    for (let key in data) {
      console.log(data[key]);
    }
  });
})
