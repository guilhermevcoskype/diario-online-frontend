import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  errorMessage: string = '';
  private auth = inject(AuthService);
  private router = inject(Router);

  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)] }),
  });

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  user = signal<User | null>(null);

  async login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.email?.value!;
    const senha = this.password?.value!;

    const success = await this.auth.login(email, senha);

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Email ou senha inválidos';
    }
  }

  goToRegister() {
    this.router.navigate(['/registrar']);
  }
}
