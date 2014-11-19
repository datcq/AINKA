$.Controller("Anddev.Related",{
	defaults:
	{
		effect:
		{
			name:"slide",
			options:
			{
				direction:"down"
			},
			duration:500
		},
		afterHide:function(){},
		afterShow:function(){},
		beforeHide:function(){},
		beforeShow:function(){}
	}
},{
	load:function(){
		var related=anddev.navigation.currentAsset().related;
		this.element.empty().html("fw/plugins/related/views/related.ejs",{
			assets:related
		},function(){});			
	},
	'.asset:not(.disabled) tapone': function (el, ev) {
		anddev.navigation.goToAsset(el.data('models').asset.path);
		return false;
	},
	hide:function()
	{
		this.options.beforeHide.apply(this.container);
		this.element.hide(this.options.effect.name,this.options.effect.options,this.options.effect.duration,this.options.afterHide);
	},
	show:function()
	{
		this.options.beforeShow.apply(this.container);
		this.element.show(this.options.effect.name,this.options.effect.options,this.options.effect.duration,this.options.afterShow);		
	},
	"{window} tapone":function()
	{
		this.stop();
		if(this.element.is(":visible")==true)
			this.hide();
	},
	toggle:function()
	{
		if(this.element.is(":visible")==true)
			this.hide();
		else
			this.show();
	},
	stop:function()
	{
		this.element.stop();
	}
});