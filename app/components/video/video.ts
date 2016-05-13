import {Component, Input} from 'angular2/core';
//import {ArticleService} from '../../services/article/article';
//import { Open } from '../open/open';
import { EcareAnimation } from '../../components/animation/ecare/ecare';
import { EcareAnimation2 } from '../../components/animation/ecare2/ecare';
import { HomeSolutionsAnimation } from '../../components/animation/homesolutions/homesolutions';

//declare var jQuery: JQueryStatic;

@Component({
  selector: 'smart-video',
  templateUrl: 'build/components/video/video.html',
  directives: [EcareAnimation, EcareAnimation2, HomeSolutionsAnimation]
})
export class Video {
  size: any;
  scrubber: any=0;
  curtime: any;
  v: any;
  playing: boolean = false;
  poc: string;
  articleFile: any;
  
  urllist: Array<any>=[
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
  constructor(){
    var video = this;
    var poc=document.location.search.split('=');
    video.poc = poc[0].substring(1);
    if (video.poc === 'homesolutions')
      video.articleFile='./interactive_homesolutions/vo9.mp3';
    else
      video.articleFile='./interactive_'+poc[1]+'/output.wav';
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
  ngOnInit() {
    var video = this; 
    video.v = document.getElementById( "ourvideo" );
    video.v.addEventListener('timeupdate', function () {
      video.curtime = parseInt(video.v.currentTime, 10);
      video.scrubber = video.curtime;
    });
      video.play(true);
  }

  resize(size) {
    if (window.parent.document.getElementById('url-container')===null) return;
    if (size==='fullscreen') {
      window.parent.document.getElementById('url-container').style.width = '100%';
    this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size==='halfscreen') {
      window.parent.document.getElementById('url-container').style.width = '1024px';
    this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size==='phone') {
      window.parent.document.getElementById('url-container').style.width = '768px';
    this.size = window.parent.document.getElementById('url-container').style.width;
    }
    if (size==='small') {
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
