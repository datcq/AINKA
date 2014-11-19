(function (anddev) {
	window.isAnimation = anddev.config.animation;
	try{
		window.pathResources = anddev.getPathResources();
	}catch(e){	}
	
	var arrLangVN = [ 
		"Thuốc tê bề mặt",
		"Bao bì đóng gói",
		"Liều lượng",
		"Dung nạp tốt",
		"Câu hỏi",
		"Ưu điểm"				
	];
	var arrLangEN = [ 
		"Surface anesthetic",
		"Packaging",
		"Dosage",
		"Well tolerated",
		"Question",
		"Advantages"				
	];
	
	anddev.ready(function ($) {
		//alert("Open PDF from: "+window.openPDFAndroid);
		
		window.openPDFAndroid = function(urlFile){
			anddev.helpers.storage.set("openPDFAndroid", anddev.navigation.currentAsset().name);
			try{
				anddev.openPDF(window.pathResources+"pdfs/"+urlFile);
			}catch(e){	}
		}
		
		/*$('.btn_pdf').bind('tapone',function(){
			window.openPDFAndroid("NitromintSpray-PL-Vietnamese-quota-2013.pdf");
		});
		
		//----------- start: Tracking to localStorage -----------------
		$('.btn_showTracking').bind('tapone',function(){
			anddev.navigation.goToAsset('s100');
		});*/
		
		window.saveTracking = function(title, value){
			var tracking = {
				"project_name":anddev.config.navigation.name,
				"create_date":""+(new Date()).format("yyyy/mm/dd hh:MM:ss"),
				"title": title,
				"value": value
			}
			
			//console.log(tracking);
			
			var name_tracking = "anddev/tracking/"+(new Date()).getTime();
			//console.log(name_tracking);
			
			localStorage.setItem(name_tracking, JSON.stringify(tracking));
			//console.log(localStorage.getItem(name_tracking));
		};
		//----------- end: Tracking to localStorage -----------------

		window.changeMenuLang = function(value){
			switch(value){
				case "EN":
					$('.menu .text').each(function( index ) {
						//console.log($(this).text());				
						$(this).html(arrLangEN[$.inArray($(this).html(),arrLangVN)]);
					});
					break;
					
				case "VN":
					$('.menu .text').each(function( index ) {
						//console.log($(this).text());				
						$(this).html(arrLangVN[$.inArray($(this).html(),arrLangEN)]);
					});
					break;
			}
		}
		
		//-----------------------Begin: this is javascript default for lightness framework don't remove this code or modify----------------------------------------------
		$('body').on('ready', '.slide', function (ev, el) {
			//anddev.helpers.storage.set("openPDFAndroid", "");
		
			anddev.helpers.storage.set("prevAsset", anddev.navigation.currentAsset().name); //set prev Asset
			
			switch(anddev.navigation.currentAsset().name){
				
				case "s6":			
				case "s8":
				case "s9":
				case "s10":
				case "s12":
				
					$('.menu .asset3').addClass('selected');
				
					break;
			}
			
			$('.btnEN').bind('tapone', function(){
				$('#stage').attr('data-lang','EN');
				window.changeMenuLang($('#stage').attr('data-lang'));			
			
				$('#mainEN, #head2').fadeIn();
				$('#mainVN, #head1').hide();			
			});
			$('.btnVN').bind('tapone', function(){
				$('#stage').attr('data-lang','VN');
				window.changeMenuLang($('#stage').attr('data-lang'));
				
				$('#mainVN, #head1').fadeIn();
				$('#mainEN, #head2').hide();
			});
		});

		//ready event
		$('#slider').on('ready', '.slide', function () {
			window.changeMenuLang($('#stage').attr('data-land'));
		
			if($('#stage').attr('data-lang')=='VN'){
				$('#mainVN, #head1').show();
				$('#mainEN, #head2').hide();
			}else if($('#stage').attr('data-lang')=='EN'){
				$('#mainEN, #head2').show();
				$('#mainVN, #head1').hide();
			}
		
			$('.headFlower').fadeIn(function(){
				$('.headFlower').addClass('ani').bind('webkitAnimationEnd', function(){
					$('.fGlow').fadeIn(function(){
						$('.fGlow').addClass('ani');
					});					
				});
			});
		});
		
		//reset event
		$('#slider').on('reset', '.slide', function () {
			anddev.navigation.enableSwipe(); //reset swipe

			//remove video before goto other asset
			$(".anddev_video").each(function () {
				$(this).controller().destroy();
			});
		});
		/*----------Effect show/hide-----*/
		$.effects.show = function (o) {
			return this.queue(function () {
				var el = $(this);
				var mode = $.effects.setMode(el, o.options.mode || 'hide');
				if (mode == "show")
					el.show();
				else
					el.hide();
				(o.callback && o.callback.apply(this, arguments));
				el.dequeue();
			});

		};
		//disble swipe on element
		$.fn.anddev_disableswipe = function () {
			if (anddev.navigation == null)
				return;
			$(this).bind("swipeleft swiperight", function (ev) {
				if (anddev.navigation.swipable() == false)
					return;
				anddev.navigation.disableSwipe();
				setTimeout(function () {
					anddev.navigation.enableSwipe();
				}, 300);
			});
		};
		function Measure() {
			var ul = $("<ul style='position:absolute;z-index:100;background:#000;color:red'></ul>").appendTo("body");
			//this trigger is fired before go to Asset
			var startTime = 0;
			$([anddev]).on('beforeSelect', function (e, el) {
				console.log('beforeSelect', el);
				startTime = new Date().getTime();
			});
			$('#slider').on('ready', '.slide', function (ev, el) {
				var duration = new Date().getTime() - startTime;
				$("<li></li>").appendTo(ul).html(duration);
			});
		}

	});
})(anddev || {});

(function (anddev) {
	anddev.ready(function ($) {
		$.extend($.effects, {
			splitElement : function (element, row, col, show, type, container) {
				if (show == null)
					show = 1;
				var offset = element.show().css('visibility', 'hidden').offset();
				var width = Math.ceil(element.outerWidth() / row);
				var height = Math.ceil(element.outerHeight() / col);
				element.css({
					visibility : "visible"
				});
				element.hide();
				var matrix = [];
				if (container == null) {
					container = element.parent();
				}
				var offset_left = 0,
				offset_top = 0;
				for (i = 0; i < col; i++) {
					var top = offset_top + i * height;
					var erow = [];
					for (j = 0; j < row; j++) {
						var left = offset_left + j * width;
						var el = $("<div></div>");
						el.css({
							left : left,
							top : top,
							width : width,
							height : height,
							overflow : "hidden",
							position : "absolute",
							"z-index" : 10
						});
						if (show == false)
							el.css({
								display : "none"
							});
						var temp = element.clone();
						temp.css({
							left : -j * width,
							top : -i * height,
							display : "block",
							position : "absolute"
						});
						el.append(temp);
						erow.push(el);
					}
					matrix.push(erow);
				}
				if (type == null)
					type = 0;
				if (type == 0) {
					for (var i = 0; i < matrix.length; i++)
						for (var j = 0; j < matrix[i].length; j++)
							container.append(matrix[i][j]);
				}
				if (type == 1) {
					for (var i = 0; i < matrix.length; i++) {
						var row = $("<div></div>");
						for (var j = 0; j < matrix[i].length; j++) {
							row.append(matrix[i][j]);
						}
						container.append(row);
					}
				}
				if (type == 2) {
					for (var i = 0; i < matrix[0].length; i++) {
						var row = $("<div></div>");
						for (var j = 0; j < matrix.length; j++) {
							row.append(matrix[j][i]);
						}
						container.append(row);
					}
				}
				return matrix;
			}
		});
		$.effects.split = function (o) {
			return this.queue(function () {
				var args = arguments;
				var el = $(this),
				mode = $.effects.setMode(el, o.options.mode || 'hide');
				var options = $.extend({
						row : 1,
						col : 1,
						duration : 500,
						direction : "up",
						parallel : false,
						delay : 0
					}, o.options);
				var el2 = el.clone().empty().removeAttr("id").css("background", "none").appendTo(el.parent()).show();
				var matrix = $.effects.splitElement(el, options.col, options.row, 0, 0, el2);
				$(">div>div", el2).removeAttr("id");
				if (mode == "show")
					$(">div", el2).hide();
				else
					$(">div", el2).show();
				var aEl = [];
				for (var i = 0; i < matrix.length; i++) {
					for (var j = 0; j < matrix[i].length; j++) {
						aEl.push(matrix[i][j]);
					}
				}
				var row = options.row,
				col = options.col,
				duration = options.duration,
				direction = options.direction,
				timeStamp = duration / (row * col),
				parallel = options.parallel,
				delay = options.delay;
				function draw(line, callback) {
					if (line == null)
						return;
					var t = 0;
					for (var j = 0; j < line.length; j++) {
						t = t + duration - Math.random() * (duration + 300);
						$(line[j])[mode]("fade", t);
					}
					setTimeout(function () {
						callback();
					}, delay);
				}
				function drawAnimation(matrix, i, callback) {
					if (i < 0)
						callback();
					draw(matrix[i], function () {
						drawAnimation(matrix, i - 1, callback);
					});
				}
				var endAnimationCounter = 0;
				function randomAnimation(aEl, length, callback) {
					if (aEl.length == 0)
						return;
					var rand = Math.floor(Math.random() * aEl.length);
					var el = $(aEl[rand]);
					aEl.splice(rand, 1);
					if (parallel == false) {
						el[mode]("fade", timeStamp, function () {
							if (aEl.length > 0)
								randomAnimation(aEl, length, callback);
							else
								callback();
						});
					} else {
						el[mode]("fade", duration, function () {
							endAnimationCounter++;
							if (endAnimationCounter == length)
								callback();
						});
						setTimeout(function () {
							randomAnimation(aEl, length, callback);
						}, delay);
					}
				}
				function end() {
					el2.remove();
					if (mode == "show")
						el.show();
					(o.callback && o.callback.apply(el[0], args));
					el.dequeue();
				}
				if (direction == "up" || direction == "down")
					drawAnimation(matrix, row - 1, end);
				if (direction == "random")
					randomAnimation(aEl, aEl.length, end);
				function getList_BottomRight() {
					var lines = [];
					for (var i = row - 1; i >= 0; i--) {
						for (var j = col - 1; j >= 0; j--) {
							var line = [];
							if (i < row - 1 && j == col - 1)
								j = 0;
							var l = i,
							m = j;
							for (var k = 0; k < row + col; k++) {
								line.push(matrix[l][m]);
								l = l - 1;
								m = m + 1;
								if (l < 0 || m >= col)
									break;
							}
							lines.push(line);
						}
					}
					return lines;
				}
				function getList_TopLeft() {
					var lines = getList_BottomRight();
					var lines2 = [];
					for (var i = lines.length - 1; i >= 0; i--) {
						var line = [];
						for (var j = lines[i].length - 1; j >= 0; j--) {
							line.push(lines[i][j]);
						}
						lines2.push(line);
					}
					return lines2;
				}
				function getList_BottomLeft() {
					var lines = [];
					for (var i = row - 1; i >= 0; i--) {
						for (var j = 0; j < col; j++) {
							var line = [];
							if (i < row - 1 && j == 0)
								j = col - 1;
							var l = i,
							m = j;
							for (var k = 0; k < row + col; k++) {
								line.push(matrix[l][m]);
								l = l - 1;
								m = m - 1;
								if (l < 0 || m < 0)
									break;
							}
							lines.push(line);
						}
					}
					return lines;
				}
				function getList_Up() {
					var lines = [];
					for (var i = row - 1; i >= 0; i--) {
						var line = [];
						for (var j = 0; j < col; j++) {
							line.push(matrix[i][j]);
						}
						lines.push(line);
					}
					return lines;
				}
				function getList_RightTop() {
					var lines = getList_BottomLeft();
					var lines2 = [];
					for (var i = lines.length - 1; i >= 0; i--) {
						var line = [];
						for (var j = lines[i].length - 1; j >= 0; j--) {
							line.push(lines[i][j]);
						}
						lines2.push(line);
					}
					return lines2;
				}
				if (direction == "bottomright" || direction == "bottomleft" || direction == "leftbottom") {
					var lines = null;
					if (direction == "bottomright") {
						if (mode == "show")
							lines = getList_BottomLeft();
						else
							lines = getList_RightTop();
					}
					if (direction == "bottomleft") {
						if (mode == "show")
							lines = getList_BottomRight();
						else
							lines = getList_TopLeft();
					}
					if (direction == "leftbottom") {
						if (mode == "show")
							lines = getList_TopLeft();
						else
							lines = getList_BottomRight();
					}
					drawAnimation(lines, lines.length - 1, end);
				}
			});
		};
		$.effects.split2 = function (o) {
			return this.queue(function () {
				var args = arguments;
				var el = $(this),
				mode = $.effects.setMode(el, o.options.mode || 'hide');
				var options = $.extend({
						row : 1,
						col : 1,
						duration : 500,
						direction : "up",
						parallel : false,
						delay : 100
					}, o.options);
				var el2 = el.clone().empty().removeAttr("id").css("background", "none").appendTo(el.parent()).show();
				var matrix = $.effects.splitElement(el, 2, 1, 0, 0, el2);
				$(">div>div", el2).removeAttr("id");
				if (mode == "show")
					$(">div", el2).hide();
				else {
					$(">div", el2).show();
				}
				var row = options.row,
				col = options.col,
				duration = options.duration,
				delay = options.delay;
				var counter = 0;
				$(matrix[0][0])[mode]("split", {
					row : row,
					col : col,
					direction : "bottomleft",
					duration : duration,
					delay : delay,
					complete : function () {
						counter++;
						if (counter == 2)
							end();
					}
				});
				$(matrix[0][1])[mode]("split", {
					row : row,
					col : col,
					direction : "bottomright",
					duration : duration,
					delay : delay,
					complete : function () {
						counter++;
						if (counter == 2)
							end();
					}
				});
				function end() {
					el2.remove();
					if (mode == "show")
						el.show();
					$.isFunction(options.complete) && options.complete.apply(el[0], args);
					el.dequeue();
				}
			});
		};
		Anddev.Popup("Anddev.customizepopup", {
			defaults : {
				effectOptions : null
			}
		}, {
			init : function (el, options) { ;
				this.blocked = false;
				this._super.apply(this, arguments);
			},
			"tapone" : function (el, ev) {
				if (this.blocked == true)
					return;
				this.blocked = true;
				this.toggle();
			},
			bindEvents : function () {
				var instance = this;
				var close = $(this.options.close, this.container);
				if (close.length > 0) {

					close.bind("tapone", function () {
						if (instance.blocked == true)
							return;
						instance.blocked = true;
						instance.hide();
					});
				}
				if (this.options.closeInside == true) {
					this.bind(this.container, "tapone", function () {
						if (instance.blocked == true)
							return;
						instance.blocked = true;

						instance.hide();
					});
				};
			},

			show : function () {
				//hide control,disable keyboard
				var helper = new Helpers();
				helper.enableKeyBoard(false);
				helper.hideNextBackSlide();

				function showPopup() {
					this.options.onBeforeShow.apply();
					this.triggerInside = true;
					if (this.options.oneInstance == true)
						this.closeAllPopup([this.element[0]]);
					this.setPosition();
					var instance = this;
					this.container.show(this.options.effect, this.options.effectOptions, this.options.duration, function () {
						instance.blocked = false;
						instance.onAfterShow();
					})
					if (this.mask != null) {
						this.mask.show();
					}
				}
				if (this.element.attr("rel").indexOf(".html") != -1) {
					var instance = this;
					var reload = 0;
					var arel = this.element.attr("rel").split("#");
					var file = arel[0];
					if (arel.length >= 2)
						reload = arel[1];
					if (this.container.attr("loadeddata") == "0" || reload == 1) {
						this.container.empty();
						this.container.load(this.element.attr("rel"), function () {
							instance.bindEvents();
							showPopup.apply(instance);
						})
						this.container.attr("loadeddata", 1);
					} else {
						showPopup.apply(this);
					}
				} else
					showPopup.apply(this);
			},
			hide : function () {
				//show control,anable keyboard
				var helper = new Helpers();
				helper.enableKeyBoard(true);
				helper.showNextBackSlide();

				this.options.onBeforeHide.apply(this);
				if (this.preventDefault == true)
					return;
				this.triggerInside = false;
				var instance = this;
				this.container.hide(this.options.effect, this.options.effectOptions, this.options.duration, function () {

					instance.onAfterHide();
					$.effects.restore(instance.container, ['top', 'bottom', 'left', 'right']);
					if (instance.mask != null) {
						instance.mask.hide();
					}
					instance.blocked = false;
				})
			},
		});
	});
})(anddev || {});
