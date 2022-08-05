import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private httpClient:HttpClient;
  constructor() {
    this.httpClient = httpClient;
  }
}
