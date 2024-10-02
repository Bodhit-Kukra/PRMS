import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    userType: new FormControl(0, [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private router: Router) {

  }

  formValue: any;

  invalidFormValue: boolean = false;

  onLogin() {
    this.formValue = this.form.value;
    if(this.form.controls['email'].errors?.['email'] || this.form.controls['email'].errors?.['required']) {
      this.invalidFormValue = true;
      alert("Invalid form values");
    }
    else if(this.form.controls['password'].errors?.['required']) {
      this.invalidFormValue = true;
      alert("Invalid form values");
    }
    else if(this.form.controls['userType'].errors?.['required']) {
      this.invalidFormValue = true;
      alert("Invalid form values");
    }
    else {
      this.router.navigateByUrl("patient-details");
      }
  }

}
