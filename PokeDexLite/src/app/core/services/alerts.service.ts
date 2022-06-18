import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  loginSuccess() {
    Swal.fire({
      icon: 'success',
      title: `Welcome Back ${localStorage.getItem("username")}` ,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  loginFail() {
    Swal.fire({
      icon: 'error',
      title: `Error on Login`,
      text: 'Check your username and password',
      showConfirmButton: false,
      timer: 2500,
    });
  }
}
