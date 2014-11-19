$.Controller("Anddev.Ref",
{
	defaults:
	{
		blockAni:false,
		close:".ref_close",
		scroller:".ref_content",
		main:"#ref_main",
		effect:
		{
			name:"slide",
			options:
			{
				direction:"left"
			},
			duration:1000
		},
		afterHide:function(){},
		afterShow:function(){},
		beforeHide:function(){},
		beforeShow:function(){}
		
	}
},
{
	init:function()
	{
		this.set(this.options.main);
	},
	set:function(selector)
	{
		var instance = this;
		if(this.container!=null)
		{		
			if($(selector)[0]==this.container[0])
				return;
			
			this.container.hide();
			this.container.off("tapone.ref",this.options.close);
		}		
				
		this.container=$(selector);
		this.container.on("tapone.ref",this.options.close,function(ev)
		{	
			instance.toggle();
		});
		//scroll content
		if($(this.options.scroller,this.container).length>0)
		{
			new iScroll($(this.options.scroller,this.container)[0],{
                scrollbarClass: "scroll",
                hideScrollbar: false,
                checkDOMChange: true,
                checkDOMChanges: true,
                vScrollbar: true
			});			
			$(this.container).anddev_disableswipe();
		}
	},
	hide:function()
	{
		var instance = this;
	
		if(instance.options.blockAni) return;
		
		instance.options.blockAni = true;
		this.options.beforeHide.apply(this.container);
				
		$( this.container ).animate({
			opacity: 0,
			right: "-385px"
		}, 1000, function(){
			instance.options.blockAni = false;
			instance.options.afterHide();
		});
		
		//this.container.hide(this.options.effect.name,this.options.effect.options,this.options.effect.duration,this.options.afterHide);
		
	},
	show:function()
	{
		var instance = this;
	
		if(instance.options.blockAni) return;
	
		instance.options.lockAni = true;
		
		this.options.beforeShow.apply(this.container);
		
		$( this.container ).animate({
			opacity: 1,
			right: "0px"
		}, 1000, function(){
			instance.options.blockAni = false;
			instance.options.afterShow();
		});
		
		
		//this.container.show(this.options.effect.name,this.options.effect.options,this.options.effect.duration,this.options.afterShow);		
		
	},
	toggle:function()
	{
		/*if(this.container.is(":visible")==true)
			this.hide();
		else
			this.show();*/
			
		if($(this.container).css('opacity')==1){
			this.hide();
		}else{
			this.show();
		}
	}
});