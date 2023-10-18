import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = 0;
var promedioTbody = document.getElementById("promedio");
renderSeriesInTable(data);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        promedio += serie.seasons;
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                            <td class=\"text-primary\">").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    promedio /= series.length;
    promedioTbody.innerHTML = "Promedio de temporadas: ".concat(promedio);
}
