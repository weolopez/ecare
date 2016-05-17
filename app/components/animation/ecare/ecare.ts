import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { Open } from '../../open/open';

@Component({
  selector: 'animation-ecare',
  templateUrl: 'build/components/animation/ecare/ecare.html',
  directives: [Open]
})
export class EcareAnimation {
  @Input('playing') playing: boolean=false;
  @Input('data') data: any;
  @Output('loaded') loaded = new EventEmitter();
  size: any;
  scrubber: any=0;
  curtime: any;
  pop: any ;
  v: any;

 // articleFile: any;
  constructor() {
    var video = this;
  //  video.articleFile='./interactive_'+document.location.search.split('=')[1]+'/output.wav';
  }
  errorMessage: string;
  
  ngOnInit() {
    var video = this;
    video.pop = Popcorn('#ourvideo');
    
    video.runVideo();
    
    video.v = document.getElementById( "ourvideo" );
    
    video.pop.listen('timeupdate', function () {
      video.curtime = parseInt(video.v.currentTime, 10);
      video.scrubber = video.curtime;
    });
    
    this.loaded.emit("event");
    
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
            var element = document.getElementById("webpagediv" + options.ind);
            if (element) element.style.display = "block";

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

            var element = document.getElementById("webpagediv" + options.ind);
            if (element) element.style.display = "none";
           
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
  }
}
