import { Component, OnInit } from '@angular/core';

import { Langage } from '../shared/models/langage';
import { LangageService } from '../shared/services/langageService.service';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {
langages: Langage[];


  constructor(private langageService : LangageService) { }

  ngOnInit() {
    this.getLangages();
  }

getLangages(): void {
  
  this.langageService.getLangages().subscribe(langages => this.langages = langages );
  
}

}
