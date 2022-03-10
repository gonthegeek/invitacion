var fechaHora = new Date();

var fechaFiesta = new Date("04/02/2022");

var diferencia = fechaFiesta.getTime() - fechaHora.getTime();
var dias = Math.round(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("reloj").innerHTML = dias + " dias ";

(function () {
  ('[data-toggle="modal"]').hover(function () {
    var modalId = (this).data("target");
    (modalId).modal("show");
  });
});


// if (window.innerWidth <= 1035) {
//   console.log('1')
//   logo = document.getElementById("background");
//   logo.style.visibility = 'hidden'
// }


