import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(
    private cb: FormBuilder
  ) { }

  citaform = this.cb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',Validators.required],
    servicio: ['',Validators.required],
    fecha: ['',Validators.required],
    rangodeldia: [''],
    psicologo: [''],
    message: [''],
  })

  __enviar(){
    if(this.citaform.valid){
      console.log(this.citaform.value)
      Swal.fire(
        'Muchas Gracias por su solicitud!',
        'Nos contactaremos pronto contigo!',
        'success'
      )
    }else{
      Swal.fire(
        'Oh...',
        'Le faltaton llenar algunos datos!',
        'error'
      )
    }
    
  }
  ngOnInit(): void {
  }

}
