import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }

   onBoardExperiments: string[] = []
  
  addExperimentOnBoard(experiment: string) {
    if (this.onBoardExperiments.includes(experiment)) {
      this.inOnBoardExperiments = true;
    } else {
      this.inOnBoardExperiments = false;
    }
    
    if (this.inOnBoardExperiments) {
        let index = this.onBoardExperiments.indexOf(experiment);
        this.onBoardExperiments.splice(index, 1);
    } else if (!this.inOnBoardExperiments && this.onBoardExperiments.length < 5) {
        this.onBoardExperiments.push(experiment);
    }
  }

}
