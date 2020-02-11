import { Component, OnInit } from '@angular/core';
import { Langage } from '../shared/models/langage';
import { LangageService } from '../shared/services/langageService.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  langages: Langage[];


  constructor(private langageService : LangageService) { }

  ngOnInit() {
    this.getLangages();
  }

getLangages(): void {
  
  this.langageService.getLangages().subscribe(langages => this.langages = langages );
  
}

}
