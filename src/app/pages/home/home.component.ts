import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public testimoniosData: any[];

  constructor(
    private ds: DataService
  ) {
    this.testimoniosData = this.ds.getTestimonios();
  }

  ngOnInit(): void {
    this.buildSlider();
  }

  buildSlider() {
    /**
     * Testimonials slider
     */
    new SwiperCore('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }

}
