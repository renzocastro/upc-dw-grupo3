import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ServiceEntity } from 'src/app/shared/service.entity';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {
  servicesData: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getServices();
  }

  private getServices() {
    this.dataService.getServices().subscribe({
      next: (data: ServiceEntity[]) => {
        this.servicesData = data;
      },
      error: (err) => {
        console.log('ERROR', err);
      }
    });
  }

}
