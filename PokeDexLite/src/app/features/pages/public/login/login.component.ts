import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { LoginFormComponent } from 'src/app/features/components/login-form/login-form.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  showLogin(){
    this.bottomSheet.open(LoginFormComponent)
  }

  ngOnInit(): void {
  }

}
