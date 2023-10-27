import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = []
  promedio: number = 0;
  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio=0;

      series.forEach(serie =>{
        this.promedio+=serie.seasons;
      });
      this.promedio/=series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
