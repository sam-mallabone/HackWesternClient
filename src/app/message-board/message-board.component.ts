import { Component, OnInit } from '@angular/core';
import { GetMessagesService } from '../get-messages.service'

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  messages;
  constructor(private getMessagesService: GetMessagesService) { }

  ngOnInit() {
    this.messages = this.getMessagesService.GetMessages()''
  }

}
