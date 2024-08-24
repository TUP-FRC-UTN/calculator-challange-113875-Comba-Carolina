import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ListMessageComponent } from './components/list-message/list-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMessageComponent, ListMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messages: string[] = [];
  addMessage(newMessage: string) {
    this.messages.push(newMessage);
  }
}
