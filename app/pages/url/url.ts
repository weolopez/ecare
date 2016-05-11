import {Page, NavController} from 'ionic-angular';
import {Iframe} from '../../components/iframe/iframe';

/*
  Generated class for the IphonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.http://localhost:8100/?article=1500001197
*/
@Page({
  templateUrl: 'build/pages/url/url.html',
  directives: [Iframe]
})
export class URL {
  winwidth: string='320px';
  url: string="http://localhost:8100/?video=1500001197";
  urllist: Array<any>=[
    {
      name: "Set up Visual Voicemail",
      url: "http://localhost:8100/?article=1500001197"
    },
    {
      name: "Insert SIM card",
      url: "http://localhost:8100/?article=1500001346"
    },
    {
      name: "Block calls",
      url: "http://localhost:8100/?article=1500001360"
    },
    {
      name: "Keyboard & typing",
      url: "http://localhost:8100/?article=1500001362"
    },
    {
      name: "Personal hotspot",
      url: "http://localhost:8100/?article=1500001373"
    },
    {
      name: "View & manage data",
      url: "http://localhost:8100/?article=1500001423"
    },
    {
      name: "Bluetooth ",
      url: "http://localhost:8100/?article=1500004587"
    }
  ]
  constructor(public nav: NavController) {}
}
