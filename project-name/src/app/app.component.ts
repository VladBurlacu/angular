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

  submitForm() {
    //console.log(this.friendModel);
    let observable = this.addFriendService.addFriend(this.friendModel)
    observable.subscribe(data => {
      console.log("it worked")},error => console.error("it didn't work"))
  }

  constructor(private addFriendService: AddFriendService) {
  }
}

