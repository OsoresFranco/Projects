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
      title: 'Welcome Back',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
