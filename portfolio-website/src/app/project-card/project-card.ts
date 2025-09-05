import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  imports: [
    MatCardModule,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  projectTitle: string = "Test Project Title";
  description: string = "Test Project Description";
  projectLink: string = "Project Link Here";
}
