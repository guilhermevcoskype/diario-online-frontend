import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)] }),
  });

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log("Login:", this.form.getRawValue());
  }

  goToRegister() {
  this.router.navigate(['/registrar']);
}
}
