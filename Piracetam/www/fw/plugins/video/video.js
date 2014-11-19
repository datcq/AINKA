$.Controller.extend("Anddev.Video", {
    defaults: {
        loop: false,
        controls: false,
        autoplay: false,
        duration: 500,
        controlbar: "controlbar",
        playpause: "playpause",
        stop: "stop",
        fullscreen: "fullscreen",
        replay: "replay",
        time: "time",
        seek: "seek",
		srt:null,
		sliders:{},
        translate:4096
    
    },
    listensTo: ["play", "pause", "stop", "replay", "fullscreen", 'playpause']
},  {

    init: function(el, options){
		if(anddev.helpers.modernizr.touch==false)
			this.videoResourcePath="../"+anddev.config.navigation.name+"/videos/";
		else{
			this.videoResourcePath = "/mnt/sdcard/ANDDEV/"+anddev.config.navigation.name+"/videos/";
			//this.videoResourcePath = "/android_asset/res/video/";
		}
		
		this.seeking = false;
		this.media=this._prepareElement();

        if (typeof this.options.controls == "string") 
            this._createControls();
        this._bindEvents();		
        this.media.load();
		
		if(this.options.srt!=null)
		{
			var opt={
				
			};
			if(typeof this.options.srt=="string")
				opt.container=$(this.options.srt);
			opt=$.extend(false,opt,this.options.srt);
			$(this.media).srt(opt);
		}

        if(this.options.autoplay){
            this.play();
        }
        
    },    
    ".{playpause} tapone": function(){
        this.playpause();
    },
    ".{stop} tapone": function(){
        this.stop();
    },
    ".{fullscreen} tapone": function(){
        this.fullscreen();
    },
    ".{replay} tapone": function(){
        this.replay();
    },
    ".{seek} slide": function(el, ev, slider){
        this.seeking = true;
        var value = slider.value * this.media.duration / 100;
        this.seek(value);
    },
    ".{seek} slidestop": function(){
        this.seeking = false;
    },
    _bindEvents: function(){
        var instance = this;
        this.bind(this.media, "ended", function(){
            if (instance.options.loop == true) {
            
                instance.replay();
            }
        });
        if (typeof this.options.controls == "string") {
            this.bind(this.media, "pause play", function(e){
                instance._refreshControl();
            });
            
            this.bind(this.media, "timeupdate", function(e){
                if (instance._checkControl("time") == true) 
                    instance._updateTime();
                if (instance.seeking == false && instance._checkControl("seek") == true) 
                    instance._updateSeek(Math.floor(this.currentTime));
            });
            
        }
		
        this.bind(this.media,"loadeddata", function(){
            
            $(instance.media).bind("playing.video seeked.video", function(){
                $(instance.media).unbind("playing.video seeked.video");
                instance.canplay();
             });
            if (instance.options.autoplay == true) {            
                var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; 
                if(isAndroid==true)//hack for android;
                {
                    $("<div style='position:absolute;z-index:10000000;left:0px;top:0px;width:100px;height:100px'></div>").appendTo("body").bind("touchstart",function(){
                        instance.play();
                        $(this).remove();
                        return false;
                    });
                    var left=Math.ceil($("#stage").offset().left),top=Math.ceil($("#stage").offset().top);
                    
                    try{
						setTimeout(function(){
							anddev.simulatorTap(left,top);
						},200);                        
                        //anddev.player.connector.sendMessage("trigger",left,top);         
                    }catch(e){ }
                    
                }
                else
                    instance.play();                    
            }   

        });
                
    },
    play:function()
    {
        var video = $("video");
        video.css({
            "-webkit-transform":"translate3d(0px,0px,0px)"
        });

    	this.media.play();
    },
    pause:function()
    {
    	this.media.pause();
    },
    canplay: function(){
        //$(this.media).css({"-webkit-transform":"initial","left":"initial"});
    },
    playpause: function(){
        if (this.media.paused == true) 
            this.play();
        else 
            this.pause();
    },
    stop: function(){
        this.media.pause();
        this.seek(0);
    },
    seek: function(pos){
        this.media.currentTime = pos;
    },
    fullscreen: function(){
        if (this.media.webkitEnterFullScreen != null) 
            this.media.webkitEnterFullScreen();
    },
    replay: function(){
        this.seek(0);
        this.play();
    },
    
    _removeVideo: function(){
    	var temp = $("video", this.element);
		//temp[0].pause();
		temp[0].pause();
    	temp.remove();
    	$(".controlbar", this.element).remove();
    },
    _prepareElement: function(){
    	
        var translateX=this.options.translate;
        var video = $("<video poster ></video>");
        video.css({
            "-webkit-transform":"translate3d("+translateX+"px,0px,0px)"
        });

        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; 
        if(isAndroid){
             video.css({
                "left":translateX
             });
        }

        for (var i = 0; i < this.element[0].attributes.length; i++) {
            var attr = this.element[0].attributes[i];
            if (attr.name == "id" || attr.name == "class" || attr.name=="src") 
                continue;   
            video.attr(attr.name, attr.value);
        }

		var temp = this.element.attr("src").split("/");
		var videoAssetname = temp[temp.length - 3] + "/";
		var videofilename = temp[temp.length - 1];
		
		if(anddev.helpers.modernizr.touch==false)
			$("<source></source>").attr("type","video/mp4").attr("src", this.videoResourcePath +videoAssetname +videofilename +".mp4").appendTo(video);
		else	
			$("<source></source>").attr("type","video/mp4").attr("src", this.videoResourcePath +videoAssetname +videofilename +".mp4").appendTo(video);

        console.log(this.videoResourcePath +videoAssetname +videofilename +".mp4");
			
		this.element.append(video);
        return video[0];
    },
    _checkControl: function(name){
        var split = this.options.controls.split(" ");
        for (var i = 0; i < split.length; i++) 
            if (split[i] == name) 
                return true;
        return false;
    },
    _createControls: function(){
    
        this.controls = {};
        this.controls.controlbar = $("<div class='" + this.options.controlbar + "'></div>");
        if (this._checkControl("playpause") == true) {
            this.controls.playpause = $("<div class='button " + this.options.playpause + "'></div>");
            this.controls.controlbar.append(this.controls.playpause);
        }
        
        if (this._checkControl("stop") == true) {
            this.controls.stop = $("<div class='button " + this.options.stop + "'></div>");
            this.controls.controlbar.append(this.controls.stop);
        }
        if (this._checkControl("replay") == true) {
            this.controls.replay = $("<div class='button " + this.options.replay + "'></div>");
            this.controls.controlbar.append(this.controls.replay);
        }
        if (this._checkControl("fullscreen") == true) {
            this.controls.fullscreen = $("<div class='button " + this.options.fullscreen + "'></div>");
            this.controls.controlbar.append(this.controls.fullscreen);
        }
        if (this._checkControl("time") == true) {
            this.controls.time = $("<div class='" + this.options.time + "'>00:00:00</div>");
            this.controls.controlbar.append(this.controls.time);
        }
        if (this._checkControl("seek") == true) {
            this.controls.seek = $("<div class='" + this.options.seek + "'></div>");
            this.controls.controlbar.append(this.controls.seek);
            this.controls.seek.sliders(this.options.slider);
        }
        this.element.append(this.controls.controlbar);
        
        
    },
    _refreshControl: function(){
        if (this.media.paused == true) 
            this.controls.playpause.removeClass("pause").addClass("play");
        else 
            this.controls.playpause.removeClass("play").addClass("pause");
    },
    _updateTime: function(){
        time = this.media.currentTime;
        time = Math.floor(time);
        if (parseFloat(this.controls.time.data("time")) == time) 
            return;
        this.controls.time.data("time", time);
        var h = Math.floor(time / 3600);
        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        var strTime = h + ":" + m + ":" + s;
        this.controls.time.html(strTime);
    },
    _updateSeek: function(duration){
        if (parseFloat(this.controls.seek.data("duration")) == duration) 
            return;
        if (this.controls.seek.length > 0) {
            this.controls.seek.data("duration", duration);
            var value = duration * 100 / this.media.duration;
            this.controls.seek.sliders("value", value);
        }
    },
    destroy: function(){
        this._removeVideo();
        this._super(); //make sure you call super!
    }
    
});

    
