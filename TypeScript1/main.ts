import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;
let promedioTbody: HTMLElement = document.getElementById("promedio")!;

renderSeriesInTable(data);

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      promedio += serie.seasons;
      trElement.innerHTML = `<th>${serie.id}</th>
                            <td class="text-primary">${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
    promedio/=series.length;
    promedioTbody.innerHTML=`Promedio de temporadas: ${promedio}`;
  }