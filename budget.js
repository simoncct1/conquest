 
 var rows = document.getElementsByTagName("td");

 for (var i = 0; i < rows.length; i++) {
    var valeur =  Math.floor(Math.random() * (10000, 999999));
    rows[i].innerHTML = valeur;
    console.log(rows[i]);
    }