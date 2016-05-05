import {Page} from 'ionic-angular';
import {Video} from '../../components/video/video';


@Page({
  templateUrl: 'build/pages/ecare/ecare.html',
  directives: [Video]
})
export class eCarePage {
  constructor() {

  }
}
