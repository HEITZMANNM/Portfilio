import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySkillsService {

  constructor() { }


  private skills = [
    { name: 'Angular', description: 'Développement frontend d\'applications web', niveau: 2 },
    { name: 'TypeScript', description: 'Langage puissant pour le développement web', niveau: 3 },
    { name: 'Spring Boot', description: 'Développement d\'applications backend robustes', niveau: 4 },
    { name: 'Java', description: 'Langage de programmation de haut niveau orienté objet pour développement d\'applications backend', niveau: 4 }
  ];

  getSkills() {
    return this.skills;
  }
}
