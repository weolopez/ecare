import {Component, Input} from 'angular2/core';
import {ArticleService} from '../../services/article/article';
import { Open } from '../open/open';
//import { EcareAnimation } from '../../components/animation/ecare/ecare';

declare var jQuery: JQueryStatic;

@Component({
  selector: 'smart-video',
  templateUrl: 'build/components/video/video.html',
  providers: [ArticleService],
  directives: [Open]
})
export class Video {
  size: any;
  scrubber: any=0;
  curtime: any;
  pop: any ;
  v: any;
  playing: boolean = false;
  
  
    data: any ={"topicId":"","articleName":"","articleDescription":"","id":"","steps":{"step":[{"stepOrder":"1","stepContent":"To check and manage data usage, from the home screen, tap <strong>Settings<\/strong>.","stepNote":"To check your current month&#39;s data usage dial <strong>*data#<\/strong> (<strong>*3282#<\/strong>) on your mobile phone to receive a text message with the current bill cycle&#39;s usage.","imageLocation":"5015/9006183_01.jpg","frame":[2,20]},{"stepOrder":"2","stepContent":"Tap <strong>Cellular<\/strong>.","imageLocation":"5015/9006183_02.jpg","frame":[20,24]},{"stepOrder":"3","stepContent":"Scroll to view a list of apps and the amount of cellular data they have used.","stepNote":"The amount of data displayed is the amount used since the statistics were last reset. To reset the statistics, scroll to the bottom, then tap <strong>Reset Statistics<\/strong>.","imageLocation":"5015/9006183_03.jpg","frame":[24,41]},{"stepOrder":"4","stepContent":"To disable cellular data usage for an app, tap the <strong>Cellular data switch<\/strong> next to the app name.","stepNote":"Learn more from Apple support article: <a href=\"https://support.apple.com/en-us/HT201299\">Learn about cellular data settings and usage on your iPhone<\/a>","imageLocation":"5015/9006183_04.jpg","frame":[41,55]},{"stepOrder":"5","stepContent":"To turn <strong>Wi-Fi Assist<\/strong> (automatically use cellular data when Wi-Fi connectivity is poor) on or off, scroll to the bottom of the page, then tap the <strong>Wi-Fi Assist switch<\/strong>. &nbsp;<br />","stepNote":"Wi-Fi Assist regularly checks the Wi-Fi connection to determine signal strength. If the Wi-Fi signal strength drops below a specific range, Wi-Fi Assist will automatically switch the session to cellular data until the Wi-Fi signal improves. &nbsp;Wi-Fi Assist is an optional setting that is turned on by default and can be turned off at any time. Data rates apply for cellular connections. Learn more from Apple support article: <a href=\"https://support.apple.com/en-us/HT205296\">About Wi-Fi Assist<\/a>","imageLocation":"5015/9006183_05.jpg","frame":[55,57]}]},"url":"http://www.att.com/devicehowto/index.jsp?id=interactive_1500001423&make=Apple&model=Apple6sPlus"};




  constructor(private articleService: ArticleService) {
    var video = this;
    video.articleFile='./interactive_'+document.location.search.split('=')[1]+'/output.wav';
  }
  errorMessage: string;
  getArticles() {
    var video = this;
    this.articleService.getArticles()
                     .subscribe(function(data) {
                       video.data = data;
                       video.runVideo();
                     },
                       error =>  this.errorMessage = <any>error);
  }
  
    
    
  play(playing) {
    var video = this;
    video.playing = playing;

    if (video.playing)
    video.pop.play();
      //video.song.play();
    else
    video.pop.pause();
//      video.song.pause();
  }
  scrub(e) {
    var video = this;
    var value = e.srcElement.value;
    video.v.currentTime = value;
  }
  ngOnInit() {
    var video = this;
    this.getArticles();
    video.pop = Popcorn('#ourvideo');
    video.v = document.getElementById( "ourvideo" );
    
    video.pop.listen('timeupdate', function () {
      video.curtime = parseInt(video.v.currentTime, 10);
      video.scrubber = video.curtime;
    });
    
    
    /*
    video.play(true);
      //    var vid = document.getElementById("ourvideo");
    
          var container = document.getElementById('videoViewport');
          
          var duration = song.duration;
    
          song.onpause = function () {
            video.playing = false;
           // jQuery('.animate').css('animation-play-state', 'paused');
          };
          song.onplaying = function () {
            video.playing = true;
         //   jQuery('.animate').css('animation-play-state', 'running');
          };
          song.onseeking = function () {
            video.playing = false;
        //   jQuery('.animate').css('animation-play-state', 'paused');
          };
          
       jQuery("#scrubber").bind("change", function () {
            song.currentTime = jQuery(this).val();
            jQuery("#scrubber").attr("max", song.duration);
          });
    
          song.addEventListener('timeupdate', function () {
            var curtime = parseInt(song.currentTime, 10);
            jQuery("#seek").attr("value", curtime);
          });*/
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
  addFrame(index, start, end, animationClass) {
    var VideoObject = this;
      VideoObject.pop
        .code({
          start: start,
          end: end,

          ind: index,

          classname: animationClass,
          onStart: function (options) {
            if (options.ind == 0) {
              document.getElementById("videoViewport").style.display = "block";
              jQuery('#webpagediv' + options.ind).show();
            }

            if (options.classname != undefined) {
              options.classname.forEach(function (item) {
                if (item.count != undefined) {
                  jQuery('#webpagediv' + options.ind).find(
                    item.element).css(
                    'animation-iteration-count',
                    item.count);
                }
                jQuery('#webpagediv' + options.ind).find(
                  item.element).addClass(item.classname);
              });

            }
            document.getElementById("webpagediv" + options.ind).style.display = "block";

          },
          onEnd: function (options) {
            if (options.classname != undefined) {
              options.classname.forEach(function (item) {
                if (item.count != undefined) {
                  jQuery('#webpagediv' + options.ind).find(
                    item.element).css(
                    'animation-iteration-count', '0');
                }
                jQuery('#webpagediv' + options.ind).find(
                  item.element).removeClass(
                  item.classname);
              });
            }

            document.getElementById("webpagediv" + options.ind).style.display = "none";

          }
        });
    }

  runVideo() {
    var VideoObject = this;
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
     var animate4 = [{
      "element": ".phone",
      "classname": "flipInY animated"
    }, {
        "element": ".text",
        "classname": "slideInRight animated"
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
    VideoObject.addFrame(0,  0  , 1, undefined);
    VideoObject.addFrame(1,  1, VideoObject.data.frame[0], animate1);
    VideoObject.addFrame(2,  VideoObject.data.frame[0], VideoObject.data.frame[1], animate2);
    for (var i = 0; i < VideoObject.data.steps.step.length; i++) {
      VideoObject.addFrame(i+3,  VideoObject.data.steps.step[i].frame[0], 
                                 VideoObject.data.steps.step[i].frame[1], 
                                 animate4);  
    }
    VideoObject.addFrame(12,  75, 80, animate4);
    VideoObject.play(true);
  }
}
