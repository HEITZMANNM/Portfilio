import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule  } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ServicesComponent,
    ContactComponent,
    SkillCardComponent,
    ServiceCardComponent,
    ContactFormComponent,
    SkillsListComponent,
    ServicesListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    RatingModule,
    ToastModule,
    InputTextModule,
    BrowserAnimationsModule
    

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
