import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormSimpleComponent } from "./form-simple/form-simple.component";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ConnectionService } from "./connection.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, FormSimpleComponent],
  bootstrap: [AppComponent],
  providers: [ConnectionService]
})
export class AppModule {}
