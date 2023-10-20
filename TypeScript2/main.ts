import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;
let promedioTbody: HTMLElement = document.getElementById("promedio")!;
let tablaDatos: HTMLElement = document.getElementById("tabla-datos")!;
let containerCard: HTMLElement = document.getElementById("container-card")!;


tablaDatos.addEventListener("click", function(event){
  console.log("Clic en la tabla detectado.");
  const activeElement = event.target as HTMLElement;

  if (activeElement.tagName == "TH" || activeElement.tagName == "TD"){
      const fila = activeElement.parentElement as HTMLTableRowElement;
      const id = fila.cells[0].textContent;

      console.log(`Fila ${id} seleccionada`);

      data.forEach((serie) => {
          if (id !== null && parseInt(id) === serie.id){
              let selectedSerie: Serie = serie;
              mostrarSerie(selectedSerie);
          }
      });
  }
});

function mostrarSerie(selectedSerie: Serie){
// Se define el estilo de la tarjeta
let card = document.createElement("div");
card.className = "card";
card.style.width = "18rem";
card.innerHTML = `<img class="card-img-top" src="${selectedSerie.img}" alt="Img">`
let cardBody = document.createElement("div");
cardBody.className = "card-body";
cardBody.innerHTML =   `<h5 class="card-title" style="font-weight: bold;">${selectedSerie.name}</h5>
                        <p class="card-text">${selectedSerie.description}</p>
                        <a href="${selectedSerie.url}" target="_blank">${selectedSerie.url}</a>`
card.appendChild(cardBody);
containerCard.innerHTML = "";
containerCard.appendChild(card);
}

renderSeriesInTable(data);

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
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
    console.log('Series desplegadas');
  }


