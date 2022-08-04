import { Component } from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languageArray:Array<string> = ['HTML', 'css','javascript','php', 'angular', 'python']
  friendModel = new Friend('','','',0,'')
}
