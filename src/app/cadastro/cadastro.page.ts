import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from 'src/validators/confirmPassword';

import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastrarForm: FormGroup;
  uid: string;
  ENome: string;
  EEmail: string;
  ETelefone: string;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase
  ) {
    this.cadastrarForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), ValidateConfirmPassword]]
    })
  }

  ngOnInit() {
  }

  submitForm() {
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.cadastrarForm.value.email, this.cadastrarForm.value.password)
      .then((response) => {
        this.uid = response.user.uid;
        this.EnviarBanco();
        this.toastMessage('Usuario cadastrado com sucesso', "success");
        this.navCtrl.navigateBack('login');
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          this.toastMessage('Email já está sendo usado', "danger");
        } else if (error.code == 'auth/invalid-email') {
          this.toastMessage('Email invalido', "danger");
        } else if (error.code == 'auth/operation-not-allowed') {
          this.toastMessage('Operação não permitida', "danger");
        } else if (error.code == 'auth/weak-password') {
          this.toastMessage('Senha fraca', "danger");
        } else {
          this.toastMessage('Ocorreu um erro inesperado', "danger");
        }
      })
  }

  EnviarDados(nome: string, email: string, telefone: string) {
    this.ENome = nome;
    this.EEmail = email;
    this.ETelefone = telefone;
  }

  EnviarBanco() {
    this.db.database.ref('/usuarios').child('').push({
      Nome: this.ENome,
      Email: this.EEmail,
      Telefone: this.ETelefone,
      idAcademica: '',
      idTrabalhista: '',
      Votacoes: '',
    })
  }

  async toastMessage(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      color: color
    });
    toast.present();
  }
}
