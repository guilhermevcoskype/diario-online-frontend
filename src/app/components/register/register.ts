import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  constructor(private router: Router, private auth: AuthService) { }

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)] }),
  });

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  async register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const user = this.form.value as any;

    const success = await this.auth.register(user);

    if (success) {
      alert('Usuário criado com sucesso!');
      this.router.navigate(['/login']);
    } else {
      alert('Erro ao criar usuário');
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}