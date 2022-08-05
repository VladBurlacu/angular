import { Component } from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languageArray:Array<string> = ['HTML', 'css','javascript','php', 'angular', 'python']
  friendModel = new Friend('','','',0,'')
  private addFriendService: AddFriendService;

  submitForm() {
    console.log(this.friendModel);
  }

  constructor() {
    this.addFriendService = new AddFriendService()
  }
}

