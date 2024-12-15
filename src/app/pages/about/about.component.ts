import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(){}

  ngOnInit(){

      // Navbar css
    const navId = Array.from(
      document.getElementsByClassName('navbar navbar-expand-lg') as HTMLCollectionOf<HTMLElement>,
    );

    const navtitle = Array.from(
      document.getElementsByClassName('navbar-brand') as HTMLCollectionOf<HTMLElement>,
    );

    const navlink = Array.from(
      document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLElement>,
    );

    navtitle.forEach(nav => {
      nav.style.fontSize = '25px';
      nav.style.color ='#fff7ed';
    });

    navId.forEach(nav => {
      // nav.style.backgroundImage = 'linear-gradient(to left, grey , white)';
      nav.style.background = "#4c4841"
      nav.style.padding = '2px';
      nav.style.position = 'fixed';
      nav.style.boxShadow="5px 2px 5px grey";
    });

    navlink.forEach(nav => {
//       nav.style.color="black";
    });


  }
}
