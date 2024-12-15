import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectListService } from 'src/app/services/project-list.service';
import Swiper from 'swiper';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service: ProjectListService, private param: ActivatedRoute){
  }
  getProjectId: any;
  galleryData: any;

  ngOnInit(): void {
    this.galleryData = this.service.galleryDetails;


//     var typed = new Typed(".auto-type",
//               {strings:["Project Art Gallery"],
//               typeSpeed:130,
//               loop: true,
//               loopCount: 2,
//               showCursor: false
//     })

    this.getProjectId = this.param.snapshot.paramMap.get('id');


    if(this.getProjectId){
      this.galleryData = this.service.galleryDetails.filter((value)=>{
        return value.id == this.getProjectId;
      })
    }

  }

}
