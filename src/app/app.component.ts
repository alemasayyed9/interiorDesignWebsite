import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {register} from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interiorDesigWebsite';
  showNavbar: any;

  constructor(router: Router){
      register();

    // already imported navbar in home component and should 
    // not be overlaped in it thats why used if statement  

      router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.showNavbar = event.url !== "/";
        }
      });
  }

  ngOnInit(): void {
  }


}
