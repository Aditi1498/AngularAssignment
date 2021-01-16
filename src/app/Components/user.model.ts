import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users/users.component";
import { HighlighterDirective } from './directives/highlighter.directive';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations : [
        UsersComponent,
        HighlighterDirective,
        FormsComponent,
    ],
    imports : [CommonModule,ReactiveFormsModule],
    exports : [UsersComponent,FormsComponent],
})

export class UserModule{

}