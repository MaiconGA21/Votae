import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public storage: Storage
    ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  submitLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.toastMessage('Logado com sucesso', "success");
        this.navCtrl.navigateForward('home');
      })
      .catch((error) => {
        if(error.code == 'auth/invalid-email'){
          this.toastMessage('Email inválido', "danger");
        } else if (error.code == 'auth/user-disabled'){
          this.toastMessage('Usuário desabilitado', "danger");
        } else if (error.code == 'auth/user-not-found'){
          this.toastMessage('Usuário não encontrado', "danger");
        } else if (error.code == 'auth/wrong-password'){
          this.toastMessage('Senha incorreta', "danger");
          this.loginForm.controls['password'].setValue(null);
        } else {
          this.toastMessage('Ocorreu um erro inesperado', "danger");
        }
      })
  }

  async toastMessage(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}
