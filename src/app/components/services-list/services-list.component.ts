import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit{

  services: { name: string, description: string }[] = [];

  constructor(private myServicesService: MyServicesService) {
  }

  ngOnInit(){
    this.services = this.myServicesService.getServices();
  }

  

}
