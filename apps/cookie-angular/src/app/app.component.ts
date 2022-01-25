import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'cookie-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private ck: CookieService) {
  }
  title = 'cookie-angular';
  handle(){
    this.ck.set("username" , "tuanpk" , 1 , '/' , '/' , true , "Strict");
    this.ck.set("password" , "1234567890" , 1 , '/' , '/' , true , "Strict");
    this.ck.set('usertype', 'agent', 1, '/', '/', true, 'Strict');
  }
}
