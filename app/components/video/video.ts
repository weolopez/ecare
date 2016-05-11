import {Component, Input} from 'angular2/core';

declare var jQuery: JQueryStatic;

@Component({
  selector: 'smart-video',
  templateUrl: 'build/components/video/video.html'
})
export class Video {
  song: Audio = new Audio('interactive_1500001197/output.wav');
  scrubber: any=0;
  curtime: any;
  constructor() {
    var video = this;
  }
  playing: boolean = false;
  play(playing) {
    var video = this;
    video.playing = playing;

    if (video.playing)
      video.song.play();
    else
      video.song.pause();
  }
  scrub(e) {
    var video = this;
    var value = e.srcElement.value;
    video.song.currentTime = value;
    
    e.preventDefault();
  }
  ngOnInit() {
    var video = this;
    
    video.song.addEventListener('timeupdate', function () {
      video.curtime = parseInt(video.song.currentTime, 10);
      video.scrubber = video.curtime;
    });
    
    video.play(true);
    /*
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
  }

  runVideo() {
  }
  seconds(t) {
    return (t % 60).toFixed(0);
  }
  minutes(t) {
    return ~~(t / 60)
  }
}
