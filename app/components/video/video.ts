import {Component, Input} from 'angular2/core';
import {ArticleService} from '../../services/article/article';
import { EcareAnimation } from '../../components/animation/ecare/ecare';
import { EcareAnimation2 } from '../../components/animation/ecare2/ecare';
import { HomeSolutionsAnimation } from '../../components/animation/homesolutions/homesolutions';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http'
@Component({
  selector: 'smart-video',
  templateUrl: 'build/components/video/video.html',
  providers: [ArticleService],
  directives: [EcareAnimation, EcareAnimation2, HomeSolutionsAnimation]
})
export class Video {
  size: any;
  scrubber: any = 0;
  curtime: any;
  v: any;
  playing: boolean = false;
  poc: string;
  articleFile: any;

  urllist: Array<any> = [
    {
      name: "Set up Visual Voicemail",
      url: "?article=1500001197"
    },
    {
      name: "Test New Common Data Model",
      url: "?poc=poc"
    },
    {
      name: "Home Solutions POC",
      url: "?homesolutions=homesolutions&user=henry"
    },
    {
      name: "Block calls",
      url: "?article=1500001360"
    },
    {
      name: "Keyboard & typing",
      url: "?article=1500001362"
    },
    {
      name: "Personal hotspot",
      url: "?article=1500001373"
    },
    {
      name: "View & manage data",
      url: "?article=1500001423"
    },
    {
      name: "Bluetooth ",
      url: "?article=1500004587"
    }
  ]
  isPOCReady: boolean = false;
  isVideoReady: boolean = false;
  notRunning: boolean = true;
  errorMessage: string;
  data: any;
  constructor(private http: Http, private articleService: ArticleService) {
    var video = this;
    var poc = document.location.search.split('=');
    video.poc = poc[0].substring(1);

    if (video.poc === 'homesolutions') {
      video.articleFile = './interactive_homesolutions/vo9.mp3';
    }
    else if (video.poc === 'video') {
      video.articleFile = './interactive_' + poc[1] + '/output.wav';
      video.articleService.getArticles()
                     .subscribe(function(data) {
                       video.data = data;
                      video.isVideoReady=true;
                     },
                       error =>  this.errorMessage = <any>error);
    }
    else {
      video.articleFile = './interactive_' + poc[1] + '/output.wav';
      video.getArticles();
    }
  }

  getArticles() {
    var video = this;
    video.http.get('./interactive_poc/video.json')
      .subscribe(function (data) {
        let body = data.text();
        video.data = JSON.parse(body) || {};
        video.isPOCReady=true;
      },
      error => this.errorMessage = <any>error);
  }
  
  initVideo() {
    var video = this;
    video.v = document.getElementById("ourvideo");
    if ((video.v) && video.notRunning) {
      video.v.addEventListener('timeupdate', function () {
        video.curtime = parseInt(video.v.currentTime, 10);
        video.scrubber = video.curtime;
      });
      video.play(true);
      video.notRunning = false;
    }
  }

  play(playing) {
    var video = this;
    video.playing = playing;

    if (video.playing)
      video.v.play();
    else
      video.v.pause();
  }
  scrub(e) {
    var video = this;
    var value = e.srcElement.value;
    video.v.currentTime = value;
  }

  resize(size) {
    if (window.parent.document.getElementById('url-container') === null) return;
    if (size === 'fullscreen') {
      window.parent.document.getElementById('url-container').style.width = '100%';
      this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size === 'halfscreen') {
      window.parent.document.getElementById('url-container').style.width = '1024px';
      this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size === 'phone') {
      window.parent.document.getElementById('url-container').style.width = '768px';
      this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size === 'small') {
      window.parent.document.getElementById('url-container').style.width = '320px';
      this.size = window.parent.document.getElementById('url-container').style.width;
    }
  }
  seconds(t) {
    return (t % 60).toFixed(0);
  }
  minutes(t) {
    return ~~(t / 60)
  }
}
