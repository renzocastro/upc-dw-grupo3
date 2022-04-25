import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private readonly http: HttpClient
  ) { }

  login(formData: FormGroup) {
    return this.recaptchaV3Service.execute('login')
      .pipe(
        map((token: string) => ({ ...formData.getRawValue(), captcha: token })),
        switchMap((data: any) => this.http.post(`${environment.host}/api/auth/loginx`, data))
      );
  }
}
