import {Component, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http'
import { Open } from '../../open/open';

@Component({
  selector: 'animation-ecare2',
  templateUrl: 'build/components/animation/ecare2/ecare.html',
  directives: [Open]
})
export class EcareAnimation2 {
  @Input('playing') playing: boolean = false;
  size: any;
  scrubber: any = 0;
  curtime: any;
  pop: any;
  v: any;


  data: any = {
    "id": "interactive_1500004587",
    "frames": [
        {
            "articleName": "Bluetooth ",
            "start" : 0,
            "end" : 4
        },
        {
            "articleDescription": "To turn on&nbsp;<strong>Bluetooth,<\/strong>&nbsp;from the clock screen, swipe to the left, then tap the&nbsp;<strong>Settings icon.<\/strong>",            
            "start" : 4,
            "end" : 13
        },
        {
            "stepOrder": "1",
            "stepContent": "To turn on&nbsp;<strong>Bluetooth,<\/strong>&nbsp;from the clock screen, swipe to the left, then tap the&nbsp;<strong>Settings icon.<\/strong>",
            "stepNote": "To optimize battery life, turn Bluetooth off when not in use.",
            "imageLocation": "img/phone1.jpg",
            "start" : 13,
            "end" : 26
        },
        {
            "stepOrder": "2",
            "stepContent": "Scroll to and tap<strong>&nbsp;Connections.<\/strong>",
            "imageLocation": "5060/9006136_02.jpg",
            "start" : 26,
            "end" : 30
        },
        {
            "stepOrder": "3",
            "stepContent": "Tap&nbsp;<strong>Bluetooth.<\/strong>",
            "imageLocation": "5060/9006136_03.jpg",
            "start" : 30,
            "end" : 34
        },
        {
            "stepOrder": "4",
            "stepContent": "Tap the&nbsp;<strong>Bluetooth toggle<\/strong>&nbsp;to turn on or off.",
            "imageLocation": "5060/9006136_04.jpg",
            "start" : 34,
            "end" : 39
        },
        {
            "stepOrder": "5",
            "stepContent": "When Bluetooth is on, the&nbsp;<strong>Bluetooth icon&nbsp;<\/strong>will display in the notification bar.",
            "imageLocation": "5060/9006136_05.jpg",
            "start" : 39,
            "end" : 46
        },
        {
            "stepOrder": "6",
            "stepContent": "To scan for Bluetooth devices, tap&nbsp;<strong>BT headset.&nbsp;<\/strong>",
            "stepNote": "<span style=\"line-height: 20.799999237060547px;\">Bluetooth will automatically scan for devices.<\/span>",
            "imageLocation": "5060/9006136_06.jpg",
            "start" : 46,
            "end" : 55
        },
        {
            "stepOrder": "7",
            "stepContent": "To connect to a Bluetooth device, tap the desired device.",
            "imageLocation": "5060/9006136_07.jpg",
            "start" : 55,
            "end" : 61
        },
        {
            "stepOrder": "8",
            "stepContent": "To unpair device, tap the&nbsp;<strong>Settings icon.<\/strong>",
            "imageLocation": "5060/9006136_08.jpg",
            "start" : 61,
            "end" : 66
        },
        {
            "stepOrder": "9",
            "stepContent": "Tap<strong>&nbsp;Unpair.<\/strong>",
            "stepNote": "If having trouble pairing/unpairing your device with your vehicle, please refer to your vehicle&#39;s user manual for additional information.&nbsp;For additional information on pairing, please see the&nbsp;<a href=\"http://www.att.com/esupport/article.jsp?sid=KB426660&amp;cv=820\">Pair Bluetooth Accessory article<\/a>.",
            "imageLocation": "5060/9006136_09.jpg",
            "start" : 66,
            "end" : 82
        }
    ],
    "url": "http://www.att.com/devicehowto/index.jsp?id=interactive_1500004587&make=Samsung&model=SamsungR735A"
};

  // articleFile: any;
  constructor(private http: Http) {
    var video = this;
    //  video.articleFile='./interactive_'+document.location.search.split('=')[1]+'/output.wav';
  }
  errorMessage: string;
  getArticles() {
    var ecareAnimation = this;
    ecareAnimation.http.get('./interactive_poc/video.json')
      .subscribe(function (data) {
        let body = data.text();
        ecareAnimation.data = JSON.parse(body) || {};
        ecareAnimation.runVideo();
      },
      error => this.errorMessage = <any>error);
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
    video.v = document.getElementById("ourvideo");

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
    VideoObject.addFrame(0, 0, 1, undefined);
    VideoObject.addFrame(1, 1, VideoObject.data.frames[0].end, animate1);
    VideoObject.addFrame(2, VideoObject.data.frames[1].start, VideoObject.data.frames[1].end, animate2);
    for (var i = 3; i < VideoObject.data.frames.length; i++) {
      VideoObject.addFrame(i, VideoObject.data.frames[i-1].start,
        VideoObject.data.frames[i-1].end,
        animate4);
    }
    VideoObject.addFrame(12, 75, 80, animate4);
  }
}
