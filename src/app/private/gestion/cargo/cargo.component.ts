import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';
import { CargoEntity } from 'src/app/shared/cargo.entity';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  isCreating = false;

  cargoForm = this.fb.group({
    no_Funcion: ['', Validators.required],
    tx_Description: [''],
    usuarioCrea: ['PER0000001']
  });

  constructor(
    private fb: FormBuilder,
    private _cargoService: CargoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  _save() {
    this.isCreating = true;

    const entity = <CargoEntity>{
      ...this.cargoForm.getRawValue()
    };
    console.log('entity', entity);

    this._cargoService.createCargo(entity).subscribe({
      next: (code: string) => {
        this._router.navigateByUrl(`/admin/cargos?code=${code}`);
      },
      error: (err) => { console.log(err) },
      complete: () => {
        this.isCreating = false;
      }
    });
  }

}
