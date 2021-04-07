import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-simple",
  templateUrl: "./form-simple.component.html",
  styleUrls: ["./form-simple.component.css"]
})
export class FormSimpleComponent implements OnInit {
  private nom: string;
  private prenom: string;

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    alert(
      "Vous avez saisi, le nom " + this.nom + " et le prénom " + this.prenom
    );
  }
}
