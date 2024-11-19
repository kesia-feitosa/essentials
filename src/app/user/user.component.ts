import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { type User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!:String;
  // @Input({required: true}) name!:string;
  // @Input({ required: true }) user! : {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }
  @Input({ required: true }) user! : User;
  @Input({ required: true }) selected: boolean = false;
  @Output() select = new EventEmitter<string>();
  // selectedUser = DUMMY_USERS[randomIndex];

  // using output function (new angular) need to pass the type of parameter that the emitter accepts
  // behind the scenes output function use event emitter and does not create a signal
  // this code is a replacement of this code: @Output() select = new EventEmitter();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
