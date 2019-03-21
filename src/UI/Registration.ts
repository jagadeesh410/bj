import { Component } from '@angular/core';
import {FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';
@Component({
    selector:'Registration-Form',
    templateUrl:'RegistrationForm.html'
})
export class RegistrationFormComponent{
    private form:FormGroup;

    constructor(private fb:FormBuilder){
        this.form=fb.group({
            name:'',
            email:'',
            username:'',
            password:''
        })
    }

}