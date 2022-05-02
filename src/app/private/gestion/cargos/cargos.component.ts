import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { CargoEntity } from 'src/app/shared/cargo.entity';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit, AfterViewInit {
  cargos:CargoEntity[] = [];

  constructor(
    private _cargoService: CargoService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._getCargos();
  }

  toDate(date: string) {
    return new Date(date);
  }

  private _getCargos() {
    this._cargoService.getCargos().subscribe({
      next: (data: CargoEntity[]) => {
        this.cargos = data;
        console.log(data);
      }
    });
  }

}
