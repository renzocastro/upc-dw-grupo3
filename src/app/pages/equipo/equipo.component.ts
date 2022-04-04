import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { EquipoData } from 'src/app/shared/equipo.interface';



@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  public equiposData: EquipoData[];

  constructor(
    private es: EquipoService
  ) {
    this.equiposData = this.es.getEquipo();
  }

  ngOnInit(): void {

  }

}
