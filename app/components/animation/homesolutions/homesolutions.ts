import {Component, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http'
import { Open } from '../../open/open';

@Component({
	selector: 'animation-homesolutions',
	templateUrl: 'build/components/animation/homesolutions/homesolutions.html',
	directives: [Open]
})
export class HomeSolutionsAnimation {
	@Input('playing') playing: boolean = false;
	size: any;
	scrubber: any = 0;
	curtime: any;
	pop: any;
	v: any;

	constructor(private http: Http) {
		var video = this;
	}
	errorMessage: string;
	getArticles() {
		var ecareAnimation = this;
	}

	ngOnInit() {
		var vid = document.getElementById("ourvideo");
		vid.onpause = function () {
			jQuery('.animated').css('animation-play-state', 'paused');
		};
		vid.onplaying = function () {
			jQuery('.animated').css('animation-play-state', 'running');
		};
		vid.onseeking = function () {
			jQuery('.animated').css('animation-play-state', 'paused');
		};
		jQuery('#closedCaptionBtn a').click(function () {
			if (jQuery('#closedCaption').hasClass('shown')) {
				jQuery('#closedCaption').removeClass('shown');
				jQuery('#closedCaptionBtn a').removeClass('active');
			}
			else {
				jQuery('#closedCaptionBtn a').addClass('active');
				jQuery('#closedCaption').addClass('shown');
			}
		});
		this.getData();
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
	getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
			.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
			" "));
	}
	getData() {
		var video = this;
		var givenUser = this.getParameterByName('user');
		console.log(givenUser);
		jQuery.get('data/' + givenUser.toUpperCase() + '.json',

			function (res) {
				var data = {};
				res.forEach(function (item) {
					if (item.user.toLowerCase() == givenUser.toLowerCase()) {
						console.log(item);
						data = item;
					}
				});
				if (data.user == undefined) {
					data = {
						"user": "Karthik",
						"data": {
							"firstName": "Karthik",
							"lastName": "Ford",
							"product": "U-verse",
							"memory": "TV & Internet",
							"scheduled": "9.00am to 11.00am",
							"date": "May 20th",
							"productImg": "tv.png"
						}
					};
				}
				jQuery(".product").html(data.data.product);
				jQuery(".memory").html(data.data.memory);
				jQuery(".scheduledTime").html(data.data.scheduled);
				jQuery(".scheduledDate").html(data.data.date);
				jQuery.get('data/caption.json', function (res) {
					setTimeout(function () {
						video.runVideo();
					}, 2000);
				});

			}).fail(function (res) {
				var data = {};

				if (data.user == undefined) {
					data = {
						"user": "Karthik",
						"data": {
							"firstName": "Karthik",
							"lastName": "Ford",
							"product": "U-verse",
							"memory": "TV & Internet",
							"scheduled": "9.00am to 11.00am",
							"date": "May 20th",
							"productImg": "tv.png"
						}
					};
				}
				//jQuery(".userNameFirst").html(data.data.firstName);
				//jQuery("#userNameLast").html(data.data.lastName);
				jQuery(".product").html(data.data.product);
				jQuery(".memory").html(data.data.memory);
				jQuery(".scheduledTime").html(data.data.scheduled);
				jQuery(".scheduledDate").html(data.data.date);
				//	audio[0].pause();
				//	audio[0].load();
				setTimeout(function () {
					video.runVideo();
				}, 2000);
			});
	}


	runVideo() {
		var pop = Popcorn("#ourvideo");
		var animate0 = [{
			"element": ".att-globe",
			"classname": "attGlobeAni animated"
		}];
		var animate1 = [{
			"element": ".animate",
			"classname": "logoanimation"
		}, {
				"element": ".dtv_logo",
				"classname": "slideInRight animated"
			}, {
				"element": ".orange",
				"classname": "zoomIn animated"
			}, {
				"element": ".people1",
				"classname": "slideInLeft animated"
			}];
		var animate2 = [{
			"element": ".people2",
			"classname": "people12Ani animated"
		}, {
				"element": ".green",
				"classname": "zoomIn animated"
			},
			{
				"element": ".pink",
				"classname": "zoomIn animated"
			}, {
				"element": ".hitxt",
				"classname": "hitxtAni animated"
			}];
		var animate3 = [{
			"element": ".hitxt",
			"classname": "hitxtAni animated"
		}];
		var animate4 = [{
			"element": ".orange",
			"classname": "fadeOut animated"
		}, {
				"element": ".people12",
				"classname": "bounceOut animated"
			}, {
				"element": ".green",
				"classname": "zoomOut animated"
			}, {
				"element": ".people1",
				"classname": "zoomOut animated"
			}, {
				"element": ".pink",
				"classname": "rotateOut animated"
			}, {
				"element": ".userNameFirst",
				"classname": "flipOutX animated"
			}];
		var animate5 = [{
			"element": ".tv",
			"classname": "zoomIn animated"
		}, {
				"element": ".orderTxt",
				"classname": "slideInLeft animated"
			}];
		var animate6 = [{
			"element": ".package",
			"classname": "flipInY animated"

		}, {
				"element": ".plus",
				"classname": "zoomIn animated"
			}, {
				"element": ".internet",
				"classname": "zoomIn animated"

			}];
		var animate7 = [{
			"element": ".package",
			"classname": "flipOutY animated"
		}, {
				"element": ".orderTxt",
				"classname": "slideOutLeft animated"
			}, {
				"element": ".tv",
				"classname": "zoomOut animated"
			}, {
				"element": ".plus",
				"classname": "zoomOut animated"
			}, {
				"element": ".internet",
				"classname": "zoomOut animated"
			}];
		var animate8 = [{
			"element": ".orderText",
			"classname": "flipInX animated"
		}, {
				"element": ".calendar",
				"classname": "zoomIn animated"
			}, {
				"element": ".green21",
				"classname": "pulse animated",
				"count": "infinite"
			}, {
				"element": ".schDate",
				"classname": "schDateAni animated"
			}, {
				"element": ".schTime",
				"classname": "schTimeAni animated"
			}];
		var animate9 = [{
			"element": ".orderText",
			"classname": "flipOutX animated"
		}, {
				"element": ".calendar",
				"classname": "zoomOut animated"
			}, {
				"element": ".green21",
				"classname": "zoomOut animated"
			}, {
				"element": ".schDate",
				"classname": "zoomOut animated"
			}, {
				"element": ".schTime",
				"classname": "zoomOut animated"
			}];
		var animate10 = [{
			"element": ".orderTxt",
			"classname": "slideInLeft animated"
		}, {
				"element": ".people_13",
				"classname": "zoomIn animated"
			}, {
				"element": ".green31",
				"classname": "green31Ani animated"
			}, {
				"element": ".orange31",
				"classname": "orange31Ani animated"
			}, {
				"element": ".chklist1",
				"classname": "chklist1Ani animated"
			}, {
				"element": ".chklist2",
				"classname": "chklist2Ani animated"
			}, {
				"element": ".chklist3",
				"classname": "chklist3Ani animated"
			}, {
				"element": ".chklist4",
				"classname": "chklist4Ani animated"
			}];
		var animate11 = [{
			"element": ".orderTxt",
			"classname": "slideOutLeft animated"
		}, {
				"element": ".people_13",
				"classname": "zoomOut animated"
			}, {
				"element": ".green31",
				"classname": "zoomOut animated"
			}, {
				"element": ".orange31",
				"classname": "zoomOut animated"
			}, {
				"element": ".chklist1",
				"classname": "flipOutX animated"
			}, {
				"element": ".chklist2",
				"classname": "flipOutX animated"
			}, {
				"element": ".chklist3",
				"classname": "flipOutX animated"
			}, {
				"element": ".chklist4",
				"classname": "flipOutX animated"
			}];
		var animate12 = [{
			"element": ".orderTxt",
			"classname": "slideInLeft animated"
		}, {
				"element": ".people_14",
				"classname": "flipInY animated"
			}, {
				"element": ".green41",
				"classname": "green41Ani animated"
			}, {
				"element": ".orange41",
				"classname": "orange41Ani animated"
			}, {
				"element": ".btn1",
				"classname": "btn1Ani animated"
			}, {
				"element": ".btn2",
				"classname": "btn2Ani animated"
			}, {
				"element": ".btn3",
				"classname": "btn3Ani animated"
			}];


		var items = [
			[0, 0.5],
			[0.5, 2.5, animate0],
			[2.5, 3.5, animate1],
			[3.5, 5, animate2],
			[5, 6, animate4],
			[6, 7, animate5],
			[7, 24, animate6],
			[24, 25, animate7],
			[25, 36, animate8],
			[36, 37, animate9],
			[37, 65, animate10],
			[65, 66, animate11],
			[66, 111, animate12],
			[111, 114]
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
							//	document.getElementById("imgdiv1").style.display = "none";
							//	document.getElementById("videoViewport").style.display = "block";
							jQuery('#webpagediv' + options.ind).show();
						}
						if (options.classname != undefined) {
							jQuery('#webpagediv' + options.ind).show();


							options.classname.forEach(function (item) {
								if (item.count != undefined) {
									jQuery('#webpagediv' + options.ind).find(
										item.element).css(
										'animation-iteration-count',
										item.count);
								}
								jQuery('#webpagediv' + options.ind).find(
									item.element).addClass(
									item.classname);
							});

						} else {
							document.getElementById("webpagediv" + options.ind).style.display = "block";
						}

					},
					onEnd: function (options) {
						if (options.classname != undefined) {

							options.classname.forEach(function (item) {
								if (item.count != undefined) {
									jQuery('#webpagediv' + options.ind).find(
										item.element).css(
										'animation-iteration-count',
										'0');
								}
								jQuery('#webpagediv' + options.ind).find(
									item.element).removeClass(
									item.classname).width();
							});

							document.getElementById("webpagediv" + options.ind).style.display = "none";

						} else {

							document.getElementById("webpagediv" + options.ind).style.display = "none";
						}
					}
				});
		}
	}
}
