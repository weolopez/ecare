import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the IphonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/iphone/iphone.html',
})
export class IphonePage {
  winwidth: string='568px';
  constructor(public nav: NavController) {}
}
