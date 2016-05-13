import {Page, NavController} from 'ionic-angular';
import {Iframe} from '../../components/iframe/iframe';

/*
  Generated class for the IphonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.?article=1500001197
*/
@Page({
  templateUrl: 'build/pages/url/url.html',
  directives: [Iframe]
})
export class URL {
  winwidth: string='320px';
  url: string="?video=1500001197";//poc";
  constructor(public nav: NavController) {}
}
