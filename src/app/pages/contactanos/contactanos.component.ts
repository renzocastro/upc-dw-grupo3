import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  contactform = this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phone: [''],
    servicio: ['',Validators.required],
    message: ['',Validators.required],
  })

  __enviar(){
    if(this.contactform.valid){
      console.log(this.contactform.value)
      Swal.fire(
        'Muchas Gracias por tu mensaje!',
        'Nos contactaremos pronto contigo!',
        'success'
      )
    }else{
      Swal.fire(
        'Oh...',
        'Le faltaton llenar unos datos!',
        'error'
      )
    }
    
  }
  ngOnInit(): void {
  }

}
