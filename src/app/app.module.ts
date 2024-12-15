import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {register} from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectpageComponent } from './pages/projectpage/projectpage.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectpageComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    ReactiveFormsModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
