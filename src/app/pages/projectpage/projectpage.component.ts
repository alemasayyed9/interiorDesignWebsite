import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css'],
})
export class ProjectpageComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: ProjectListService,
    private router: Router
  ) {}
  getProjectId: any;
  projectData: any;
  galleryData: any;

  ngOnInit(): void {
    // List of Data
    this.getProjectId = this.param.snapshot.paramMap.get('id');

    if (this.getProjectId) {
      this.galleryData = this.service.galleryDetails.filter((value) => {
        return value.id == this.getProjectId;
      });
    }

    if(this.getProjectId == 1){
      this.projectData = this.service.homeInterior;
    }
    else if(this.getProjectId == 2){
      this.projectData = this.service.salon;
    }
    else if(this.getProjectId == 3){
      this.projectData = this.service.washroom;
    }
    else if(this.getProjectId == 6){
      this.projectData = this.service.hospital;
    }

  // Individual Page Designs
    // switch (this.getProjectId) {
    //   case 0:
    //     this.projectData = this.service.homeInterior;
    //     break;
    //   case 1:
    //     this.projectData = this.service.salon;
    //     break;
    //   case 2:
    //     this.projectData = this.service.hospital;
    //     break;
    //   case 3:
    //     this.projectData = this.service.washroom;
    //     break;
    //   case 4:
    //     this.projectData = this.service.kitchen;
    //     break;
    //   case 5:
    //     this.projectData = this.service.wardrobe;
    //     break;
    //   default:
    //     this.projectData = this.service.homeInterior;
    //     break;
    // }

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
