import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoardComponent } from './message-board/message-board.component'
import { RouterModule, Routes } from '@angular/router'
import {LoginComponent} from './login/login.component'
import {TestmessageComponent} from './testmessage/testmessage.component'
import { MessagedetailComponent } from './messagedetail/messagedetail.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'message', component: MessageBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'testmessage', component: TestmessageComponent},
  {path: 'message/detail/:id', component: MessagedetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
