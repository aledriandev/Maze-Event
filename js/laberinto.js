var tablero = document.getElementById('tablero');

var mapa=[
"******************",
"*_________*______*",
"*_******____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var arrayMapa = [];
for (var i = 0; i < mapa.length; i++) {
  for (var j = 0; j < mapa[i].length; j++) {
    var M= mapa[i].split("");
  }
  arrayMapa.push(M);
}
var arrayMapaLineal = [];
for (var i = 0; i < arrayMapa.length; i++) {
  arrayMapaLineal=arrayMapaLineal.concat(arrayMapa[i])
}


function generarTabla() {
  var n = mapa.length;
  var m = mapa[0].length;   
  var tabla = document.createElement('table');
  tabla.border = "0";
  for (var i = 0; i < n; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < m; j++) {
      var celda = document.createElement('td');
      if (mapa[i][j] == "*") {
        celda.setAttribute('class', 'pared');
      }else if(mapa[i][j] == "o") {
        celda.setAttribute('class','inicio')
      }else if(mapa[i][j] == "W") {
        celda.setAttribute('class','final')
      }else{
        celda.setAttribute('class','blanco');
      }
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

generarTabla();