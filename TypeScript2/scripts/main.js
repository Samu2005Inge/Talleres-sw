import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = 0;
var promedioTbody = document.getElementById("promedio");
var tablaDatos = document.getElementById("tabla-datos");
var containerCard = document.getElementById("container-card");
tablaDatos.addEventListener("click", function (event) {
    console.log("Clic en la tabla detectado.");
    var activeElement = event.target;
    if (activeElement.tagName == "TH" || activeElement.tagName == "TD") {
        var fila = activeElement.parentElement;
        var id_1 = fila.cells[0].textContent;
        console.log("Fila ".concat(id_1, " seleccionada"));
        data.forEach(function (serie) {
            if (id_1 !== null && parseInt(id_1) === serie.id) {
                var selectedSerie = serie;
                mostrarSerie(selectedSerie);
            }
        });
    }
});
function mostrarSerie(selectedSerie) {
    // Se define el estilo de la tarjeta
    var card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    card.innerHTML = "<img class=\"card-img-top\" src=\"".concat(selectedSerie.img, "\" alt=\"Img\">");
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.innerHTML = "<h5 class=\"card-title\" style=\"font-weight: bold;\">".concat(selectedSerie.name, "</h5>\n                        <p class=\"card-text\">").concat(selectedSerie.description, "</p>\n                        <a href=\"").concat(selectedSerie.url, "\" target=\"_blank\">").concat(selectedSerie.url, "</a>");
    card.appendChild(cardBody);
    containerCard.innerHTML = "";
    containerCard.appendChild(card);
}
renderSeriesInTable(data);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        promedio += serie.seasons;
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                            <td class=\"text-primary\">").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    promedio /= series.length;
    promedioTbody.innerHTML = "Promedio de temporadas: ".concat(promedio);
    console.log('Series desplegadas');
}
