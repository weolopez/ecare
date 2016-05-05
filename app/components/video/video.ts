import {Component} from 'angular2/core';


declare var jQuery: JQueryStatic;

/*
  Generated class for the Video component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'smart-video',
  templateUrl: 'build/components/video/video.html'
})
export class Video {
  text: string;

  data: any = {
    id: "interactive_1500004571",
    articleName: "Learn and customize the home screen",
    articleDescription: "Add shortcuts and widgets, access the notification panel, changing wallpaper, and more.",
    topicId: "9006104",
    url: "http://www.att.com/devicehowto/index.jsp?id=interactive_1500004571&make=Samsung&model=SamsungR735A",
    steps: {
      step: [
        {
          stepContent: "To view notifications, swipe from the left to right on the clock screen.",
          stepOrder: "1",
          imageLocation: "5060/9006104_01.jpg"
        },
        {
          stepContent: "To view the moments bar, swipe down from the top of the clock screen.",
          stepOrder: "2",
          imageLocation: "5060/9006104_02.jpg"
        },
        {
          stepContent: "To view widgets, swipe from right to left on the clock screen.&nbsp;",
          stepOrder: "3",
          imageLocation: "5060/9006104_03.jpg"
        },
        {
          stepContent: "The shortcut screen has links to the&nbsp;<strong>App list, Buddy, Settings&nbsp;</strong>and&nbsp;<strong>S Voice.</strong>&nbsp;Tap desired app to use or swipe right to left again to view more widgets. &nbsp;",
          stepNote: "To edit which apps appear on the shortcut screen, tap and hold one of the icons &gt;&nbsp;<strong>EDIT.</strong>",
          stepOrder: "4",
          imageLocation: "5060/9006104_04.jpg"
        },
        {
          stepContent: "To add a widget, swipe left until an empy screen appears, then tap the&nbsp;<strong>Plus icon</strong>&nbsp;and select the desired widget.&nbsp;",
          stepOrder: "5",
          imageLocation: "5060/9006104_05.jpg"
        },
        {
          stepContent: "To edit the order of the widgets, tap and hold your finger on a widget until the minus sign appears on the top right corner.&nbsp;",
          stepOrder: "6",
          imageLocation: "5060/9006104_06.jpg"
        },
        {
          stepContent: "Tap and hold the&nbsp;<strong>Widget</strong>&nbsp;again and drag it to the desired position, then release.&nbsp;",
          stepOrder: "7",
          imageLocation: "5060/9006104_07.jpg"
        },
        {
          stepContent: "Tap the screen to confirm.&nbsp;",
          stepOrder: "8",
          imageLocation: "5060/9006104_08.jpg"
        },
        {
          stepContent: "To remove a widget, tap and hold your finger on the widget until the minus sign appears on the top right corner.&nbsp;",
          stepOrder: "9",
          imageLocation: "5060/9006104_09.jpg"
        },
        {
          stepContent: "Tap the&nbsp;<strong>Minus sign.&nbsp;</strong>",
          stepOrder: "10",
          imageLocation: "5060/9006104_10.jpg"
        }
      ]
    }
  };
  audio: any = {
    "name": "ecare_1500004571",
    "dialog": {
      "PAUSE0": {
        "name": "PAUSE0",
        "length": null,
        "sentence": "PAUSE. "
      },
      "sentence0": {
        "name": "sentence0",
        "length": "4.813625",
        "sentence": "To view notifications, swipe from the left to right on the clock screen. "
      },
      "PAUSE1": {
        "name": "PAUSE1",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 8.8
      },
      "sentence1": {
        "name": "sentence1",
        "length": "4.577375",
        "sentence": "To view the moments bar, swipe down from the top of the clock screen. "
      },
      "PAUSE2": {
        "name": "PAUSE2",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 15.4
      },
      "sentence2": {
        "name": "sentence2",
        "length": "4.284375",
        "sentence": "To view widgets, swipe from right to left on the clock screen. "
      },
      "PAUSE3": {
        "name": "PAUSE3",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 21.6
      },
      "sentence3": {
        "name": "sentence3",
        "length": "15.604625",
        "sentence": "The shortcut screen has links to the App list, Buddy, Settings and S Voice. Tap desired app to use or swipe right to left again to view more widgets. To edit which apps appear on the shortcut screen, tap and hold one of the icons EDIT. "
      },
      "PAUSE4": {
        "name": "PAUSE4",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 39
      },
      "sentence4": {
        "name": "sentence4",
        "length": "7.195063",
        "sentence": "To add a widget, swipe left until an empy screen appears, then tap the Plus icon and select the desired widget. "
      },
      "PAUSE5": {
        "name": "PAUSE5",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 47
      }, 
      "sentence5": {
        "name": "sentence5",
        "length": "6.931563",
        "sentence": "To edit the order of the widgets, tap and hold your finger on a widget until the minus sign appears on the top right corner. "
      },
      "PAUSE6": {
        "name": "PAUSE6",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 56
      },
      "sentence6": {
        "name": "sentence6",
        "length": "4.961625",
        "sentence": "Tap and hold the Widget again and drag it to the desired position, then release. "
      },
      "PAUSE7": {
        "name": "PAUSE7",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 63
      },
      "sentence7": {
        "name": "sentence7",
        "length": "2.216813",
        "sentence": "Tap the screen to confirm. "
      },
      "PAUSE8": {
        "name": "PAUSE8",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 67
      },
      "sentence8": {
        "name": "sentence8",
        "length": "6.371438",
        "sentence": "To remove a widget, tap and hold your finger on the widget until the minus sign appears on the top right corner. "
      },
      "PAUSE9": {
        "name": "PAUSE9",
        "length": null,
        "sentence": "PAUSE. ",
        "animate": 75
      },
      "sentence9": {
        "name": "sentence9",
        "length": "1.991813",
        "sentence": "Tap the Minus sign."
      }
    },
    "messages": [
      "Error getting Audio\n"
    ]
  }
  constructor() {
    this.text = 'Hello World';

  }

  ngOnInit() {
    var VideoObject = this;
    jQuery(window).ready(function () {
      jQuery('.webpagedivseg').addClass('showContent');
      setTimeout(function () {
        VideoObject.runVideo();
      }, 3000);

    });

    jQuery(document).ready(function () {
      var vid = document.getElementById("ourvideo");
      vid.onpause = function () {
        jQuery('.animate').css('animation-play-state', 'paused');
      };
      vid.onplaying = function () {
        jQuery('.animate').css('animation-play-state', 'running');
      };
      vid.onseeking = function () {
        jQuery('.animate').css('animation-play-state', 'paused');

      };

    });
  }

  runVideo() {
    var pop = Popcorn("#ourvideo");
    var animate1 = [{
      "element": ".welcometxt",
      "classname": "zoomIn animated"
    }];
    var animate2 = [{
      "element": ".welcometxt",
      "classname": "welcometxtAni animated"
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
      [0.5, 2, animate1],
      [2, 3, animate4],
      [3, 8, animate4],
      [8, 15, animate4],
      [15, 21, animate4],
      [21, 39, animate4],
      [39, 47, animate4],
      [47, 56, animate4],
      [56, 63, animate4],
      [63, 67, animate4],
      [67, 75, animate4],
      [75, 80, animate4]
    ];
    for (var i = 0; i < items.length; i++) {
      pop
        .code({
          start: items[i][0],
          end: items[i][1],

          ind: i,

          classname: items[i][2],
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
    pop.play();
  }



}
