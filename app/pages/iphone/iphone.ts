import {Page, NavController} from 'ionic-angular';
import {Iframe} from '../../components/iframe/iframe';

/*
  Generated class for the IphonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/iphone/iphone.html',
  directives: [Iframe]
})
export class IphonePage {
  winwidth: string='568px';
  url: string='?video=1500001197';
  constructor(public nav: NavController) {}
}
