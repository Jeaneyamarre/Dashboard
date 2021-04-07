import { Component } from "@angular/core";
import { ConnectionService } from "./connection.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "DashBoard";

  public test;

  constructor(public conn: ConnectionService) {}

  details() {}
}
