import { Injectable } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ConnectionService {
  public connected$ = new BehaviorSubject<boolean>(false);
  private config = "https://www.google.fr";
  public connState: boolean;
  private source = interval(10000);

  constructor(private _http: HttpClient) {
    this.source.subscribe(() => {
      this._http
        .get(this.config,{ observe: "response" })
        .pipe(first())
        .subscribe(resp => {
          if (resp.status === 200) {
            this.connected(true);
          } else {
            this.connected(false);
          }
        }),
        err => this.connected(false);
    });

    this.connected$.subscribe(connected => {
      console.log("Connected: ", connected);
    });
  }

  connected(data: boolean) {
    this.connState = data;
    this.connected$.next(this.connState);
  }
}
