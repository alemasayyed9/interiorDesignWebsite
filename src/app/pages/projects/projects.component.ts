import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private service: ProjectListService, private router: Router){}

  galleryData: any;

  ngOnInit(): void {

    this.galleryData = this.service.galleryDetails;

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

    const activelink = Array.from(
          document.getElementsByClassName('active-link') as HTMLCollectionOf<HTMLElement>,
        );


    navtitle.forEach(nav => {
      nav.style.fontSize = '25px';
      nav.style.color ='#fff7ed';
    });


    navId.forEach(nav => {
      // nav.style.backgroundImage = 'linear-gradient(to left, grey , white)';
      nav.style.background = "#4c4841"
      nav.style.padding = '4px';
      nav.style.position = 'fixed';
      nav.style.boxShadow="5px 2px 5px grey";
    });


  // if statement is not necessary here, kept it just for understanding puropose
  if(this.router.url === '/projects')
    {
//     navlink.forEach(nav => {
//       nav.style.color="#fff7ed";
//     });
//
//   activelink.forEach(nav => {
//         nav.style.color="#4c4841";
//       });


  }
  }

}
