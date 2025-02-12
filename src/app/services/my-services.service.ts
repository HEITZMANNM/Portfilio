import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor() { }

  private services = [
    { name: 'Développement Web', description: 'Création de sites et applications web' },
    { name: 'Développement Backend', description: 'API et microservices robustes' },
  ];

  getServices() {
    return this.services;
  }
}
