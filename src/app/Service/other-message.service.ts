import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherMessageService {

  constructor() { }

  getothermessage() {
    return "Message from other message service"
  }
}
