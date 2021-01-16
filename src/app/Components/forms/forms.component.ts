import { Component, OnInit, Output,EventEmitter, Input, OnChanges, SimpleChange } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit,OnChanges {
  userForm: FormGroup = new FormGroup({
    id : new FormControl(-1),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Input()
  selectedUser : User = {name : "",username:"",email : ""}

  @Input()
  index : number = 0


 

  @Output()
  user = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.index >= 0){
    this.userForm.setValue({
      id : this.index,
      name : this.selectedUser.name,
      username : this.selectedUser.username,
      email : this.selectedUser.email,
      index : -1,
    }
    )
  }
  }

  resetForm() {
    this.userForm.reset();
  }

  hasError(controlName: string, errorType: string | string[]) {
    let errorTypes = [];
    if (typeof errorType === 'string') {
      errorTypes = [errorType];
    } else {
      errorTypes = errorType;
    }
    // errors: {required: true, email: true}
    // errorTypes: ['required', 'email]

    const control = this.userForm.get(controlName);
    if (control && control.touched) {
      return errorTypes.some((e) => control.getError(e));
    }
    return false;
  }

  handleSubmit(){
    //console.log(this.userForm.value)
      this.user.emit(this.userForm.value)
      this.userForm.reset();
  }
}