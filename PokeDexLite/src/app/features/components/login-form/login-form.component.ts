import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import {
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alert: AlertsService,
    private bottomSheetRef: MatBottomSheetRef<LoginFormComponent>
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  submit() {
    this.loginService.login(this.loginForm.value).subscribe((res) => {
      localStorage.setItem("userId", res.userId),
      localStorage.setItem("username", res.username),
      this.alert.loginSuccess();
    }, error =>{
      this.alert.loginFail()
    });
  }
}
