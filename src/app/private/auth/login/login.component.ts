import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    pw: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
  }

  __send() {
    console.log(this.loginForm);

    this.authService.login2(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
