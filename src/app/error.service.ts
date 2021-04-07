import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class errorService implements OnInit {
  error[];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    alert('Vous avez saisi, le nom '+this.nom+' et le prénom '+this.prenom);
  }

}