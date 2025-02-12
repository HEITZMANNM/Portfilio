import { Component, OnInit } from '@angular/core';
import { MySkillsService } from 'src/app/services/my-skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit{

  skills: { name: string, description: string, niveau: number }[] = [];

  constructor(private mySkillsService: MySkillsService) {
  }

  ngOnInit(){
    this.skills = this.mySkillsService.getSkills();
  }

}
