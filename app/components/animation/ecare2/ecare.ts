import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { Open } from '../../open/open';

@Component({
  selector: 'animation-ecare2',
  templateUrl: 'build/components/animation/ecare2/ecare.html',
  directives: [Open]
})
export class EcareAnimation2 {
  @Input('playing') playing: boolean = false;
  @Input('data') data: any;
  @Output('loaded') loaded = new EventEmitter();
  
  size: any;
  scrubber: any = 0;
  curtime: any;
  pop: any;
  v: any;
  
  constructor() {
    var video = this;
  }

  ngOnInit() {
    var video = this;
    video.pop = Popcorn('#ourvideo');
    video.runVideo();
    video.v = document.getElementById("ourvideo");

    video.pop.listen('timeupdate', function () {
      video.curtime = parseInt(video.v.currentTime, 10);
      video.scrubber = video.curtime;
    });
    this.loaded.emit("event");
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
