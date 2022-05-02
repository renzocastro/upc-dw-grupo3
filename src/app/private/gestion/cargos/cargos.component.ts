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
  itemCode = '';

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

  showModal(evt: any) {
    this.itemCode = evt.relatedTarget.getAttribute('data-bs-code');

  }

  private _getCargos() {
    this._cargoService.getCargos().subscribe({
      next: (data: CargoEntity[]) => {
        this.cargos = data;
      }
    });
  }

  eliminarCargo() {
    if (this.itemCode === '') return;

    this._cargoService.deleteCargo(this.itemCode).subscribe({
      next: (data: boolean) => {
        if (data) {
          this._getCargos();
        }
      },
      complete: () => {
        this.itemCode = '';
      }
    });
  }

}
