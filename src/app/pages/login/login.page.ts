import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private toast: ToastService, private auth: AuthService, private storage: StorageService) { }

  ngOnInit() {

  }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();

    return ( this.postData.username && this.postData.password && username.length > 0 && password.length > 0);

  }

  loginAction() {
     if (this.validateInputs()) {
      this.auth.login(this.postData).subscribe((res: any) => {
        if (res.userData) {
          this.storage.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['home/feed']);
        } else {
          this.toast.presentToast('Incorrect Username or Password');
        }
      },
      (error: any) => {
        this.toast.presentToast('Network Connection Error');
      });
     } else {
      this.toast.presentToast('You must enter all the inputs');
     }
  }

}
