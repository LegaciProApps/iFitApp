import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import { User} from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
  }

async login(user : User){
	try {
	const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
	if (result){
	this.navCtrl.setRoot('HomePage');
	}
	}
	catch(e){
	console.error(e);
	}
}

signup(){
	
	this.navCtrl.push(SignupPage);
}
}