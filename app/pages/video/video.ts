import {Page} from 'ionic-angular';
import {Video} from '../../components/video/video';

@Page({
  templateUrl: 'build/pages/video/video.html',
  directives: [Video]
})
export class VideoPage {
  constructor() {
  }
}