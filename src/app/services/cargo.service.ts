import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CargoEntity } from '../shared/cargo.entity';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private http: HttpClient
  ) { }

  getCargos() {
    return this.http.get(`${environment.host}/api/job-positions`)
      .pipe(
        map((response: any) => <CargoEntity[]>(response?.data ? response.data : []))
      );
  }

  deleteCargo(code: string) {
    return this.http.delete(`${environment.host}/api/job-positions/${code}`)
      .pipe(
        map((response: any) => <boolean>(response?.data ? response.data : false))
      );
  }


}
