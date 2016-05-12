import {Component, Input} from 'angular2/core';
import {ArticleService} from '../../../services/article/article';
import { Open } from '../../open/open';

@Component({
  selector: 'animation-ecare',
  templateUrl: 'build/components/animation/ecare/ecare.html',
  providers: [ArticleService],
  directives: [Open]
})
export class EcareAnimation {
  //@Input('winwidth') winwidth: string='768px';
   data: any = { "topicId": "", "articleName": "", "articleDescription": "", "id": "", "steps": { "step": [{ "stepOrder": "1", "stepContent": "To check and manage data usage, from the home screen, tap <strong>Settings<\/strong>.", "stepNote": "To check your current month&#39;s data usage dial <strong>*data#<\/strong> (<strong>*3282#<\/strong>) on your mobile phone to receive a text message with the current bill cycle&#39;s usage.", "imageLocation": "5015/9006183_01.jpg", "frame": [2, 20] }, { "stepOrder": "2", "stepContent": "Tap <strong>Cellular<\/strong>.", "imageLocation": "5015/9006183_02.jpg", "frame": [20, 24] }, { "stepOrder": "3", "stepContent": "Scroll to view a list of apps and the amount of cellular data they have used.", "stepNote": "The amount of data displayed is the amount used since the statistics were last reset. To reset the statistics, scroll to the bottom, then tap <strong>Reset Statistics<\/strong>.", "imageLocation": "5015/9006183_03.jpg", "frame": [24, 41] }, { "stepOrder": "4", "stepContent": "To disable cellular data usage for an app, tap the <strong>Cellular data switch<\/strong> next to the app name.", "stepNote": "Learn more from Apple support article: <a href=\"https://support.apple.com/en-us/HT201299\">Learn about cellular data settings and usage on your iPhone<\/a>", "imageLocation": "5015/9006183_04.jpg", "frame": [41, 55] }, { "stepOrder": "5", "stepContent": "To turn <strong>Wi-Fi Assist<\/strong> (automatically use cellular data when Wi-Fi connectivity is poor) on or off, scroll to the bottom of the page, then tap the <strong>Wi-Fi Assist switch<\/strong>. &nbsp;<br />", "stepNote": "Wi-Fi Assist regularly checks the Wi-Fi connection to determine signal strength. If the Wi-Fi signal strength drops below a specific range, Wi-Fi Assist will automatically switch the session to cellular data until the Wi-Fi signal improves. &nbsp;Wi-Fi Assist is an optional setting that is turned on by default and can be turned off at any time. Data rates apply for cellular connections. Learn more from Apple support article: <a href=\"https://support.apple.com/en-us/HT205296\">About Wi-Fi Assist<\/a>", "imageLocation": "5015/9006183_05.jpg", "frame": [55, 57] }] }, "url": "http://www.att.com/devicehowto/index.jsp?id=interactive_1500001423&make=Apple&model=Apple6sPlus" };
  
  @Input('url') url: string;
 //  url: string="http://localhost:8100/?article=1500001197";
  constructor(private articleService: ArticleService) {
  }
  getArticles() {
    var video = this;
    this.articleService.getArticles()
      .subscribe(function(articles) {
          video.data = articles;
          video.runVideo();
      },
      error => this.errorMessage = <any>error);
  }
  ngOnInit() {
    var VideoObject = this;

    this.getArticles();
    
  }
  runVideo() {
    var VideoObject = this;
    VideoObject.pop = Popcorn("#ourvideo");
    var animate1 = [{
      "element": ".welcometxt",
      "classname": "zoomIn animated"
    }];
    var animate2 = [{
      "element": ".welcometxt",
      "classname": "welcometxtAni animated"
    }, {
        "element": ".articleDescription",
        "classname": "slideInRight animated"
      }, {
        "element": ".bubble",
        "classname": "zoomIn animated"
      }, {
        "element": ".phone",
        "classname": "flipInY animated"
      }, {
        "element": ".text",
        "classname": "slideInRight animated"
      }, {
        "element": ".notes",
        "classname": "notesAni animated"
      }, {
        "element": ".stepNum",
        "classname": "flipInY animated"
      }];
    var animate3 = [{
      "element": ".welcometxt1",
      "classname": "welcometxtAni animated"
    }, {
        "element": ".phone",
        "classname": "flipInY animated"
      }, {
        "element": ".text",
        "classname": "slideInRight animated"
      }, {
        "element": ".notes",
        "classname": "notesAni animated"
      }, {
        "element": ".stepNum",
        "classname": "flipInY animated"
      }];

    var animate5 = [{
      "element": ".phone",
      "classname": "flipInY animated"
    }, {
        "element": ".text",
        "classname": "slideInRight animated"
      }, {
        "element": ".stepNum",
        "classname": "flipInY animated"
      }, {
        "element": ".notes",
        "classname": "flipInX animated"
      }];
    var items = [
      [0, 0.5],
      [0.5, 2, animate1]
    ];
    VideoObject.addFrame(0, 0, 1, undefined);
    VideoObject.addFrame(1, 1, VideoObject.data.frame[0], animate1);
    VideoObject.addFrame(2, VideoObject.data.frame[0], VideoObject.data.frame[1], animate2);
    for (var i = 0; i < VideoObject.data.steps.step.length; i++) {
      VideoObject.addFrame(i + 3, VideoObject.data.steps.step[i].frame[0],
        VideoObject.data.steps.step[i].frame[1],
        VideoObject.animate4);
    }
    VideoObject.addFrame(12, 75, 80, VideoObject.animate4);
    VideoObject.pop.play();
  }
}
