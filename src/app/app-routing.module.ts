import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoardComponent } from './message-board/message-board.component'
import { RouterModule, Routes } from '@angular/router'
import {LoginComponent} from './login/login.component'
import {TestmessageComponent} from './testmessage/testmessage.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'message', component: MessageBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'testmessage', component: TestmessageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
