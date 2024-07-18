import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherMessageService } from './other-message.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _message = "Hello my name is Abhi ";
  constructor(private _OtherMessageService: OtherMessageService) { }

  getmessage() {
    return this._message + this._OtherMessageService.getothermessage();
  }
}
