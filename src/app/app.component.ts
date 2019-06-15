import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Votações',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Resultados',
      url: '/resultados',
      icon: 'paper'
    },
    {
      title: 'Criar votação',
      url: '/criar-votacao',
      icon: 'add-circle-outline'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
     }
    // ,
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.navigateRoot('login');
  }
}
