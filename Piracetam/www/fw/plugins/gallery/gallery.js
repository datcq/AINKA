Anddev.slideshow("Anddev.gallery",{
	defaults:{
		current:4,
		enableAnimation:true
	}
}, {
	init:function(el,options)
	{
		var items=this.element.children();
		for(var i=0;i<items.length;i++)
		{
			$(items[i]).attr("index",i);
		}

		if(this.options.cycle==false)
		{

			
			for(var i=0;i<this.options.current;i++)
			{
				this.element.prepend($("<div style='display:none'></div>"));
			}
					
		}

		this._super(el,options);
		
		this.enableAnimation(this.options.enableAnimation);
	},
	enableAnimation:function(canAnimation)
	{
		if(arguments.length==0)
		{
			return this._enableAnimation;
		}
		this._enableAnimation=canAnimation;
	},
	_bindEvents:function()
	{
		var instance=this;
		this.bind(this.items,"click",function(ev){
			return instance._item_click($(this),ev);
		});
		this._super();
	},
	change:function(index)
	{
		if(this.options.cycle==false)
		{

			if($(this.items[index]).is(":visible")==false)
				return;
		}

		if (this.lock == true )
            return false;
        this.lock = true;
        
        var current = this.current;
        var change = this.element.data("effects.change");
        if (change == null)
        {
            change = {
                current: current,
                lock: false,
                next: index
            };
        }
        change.current = current;
        change.next = index;
        this.element.data("effects.change", change);
        this._trigger("onBeforeSelect", null, [this,current, index]);
        var instance=this;

        function end()
        {
        	instance._trigger("onAfterSelect", null, [instance,current, index]);
        	instance.items=instance.element.children();
        	instance.lock=false;	        	
        }
        if(this.enableAnimation()==true)
        {
            $(this.items[index]).bind("webkitTransitionEnd.Anddev_Gallery",function(){
            	$(this).unbind("webkitTransitionEnd.Anddev_Gallery");
            	end();
            });        	
        }
        if(index>current)
        {
        	var firsts=anddev.u.first(this.items,index-current);
        	this.element.append(firsts);	
        }
        else
        {
        	var lasts=Array.prototype.slice.call(this.items,index-current);
        	this.element.prepend(lasts);   	
        }
        if(this.enableAnimation()==false)
        {
        	end();	      	
        }

    	
        return true;
	},
	_item_click:function(el,ev){
		var counter=0;
		anddev.u.find(this.items,function(iterator){
			if(iterator==el[0])
				return true;
			counter++;
		});
		if(counter==this.current)
			this._trigger("click",null,[this,this.current]);
		else
			this.change(counter);
	},
	swipeLeft:function()
	{
		this.next();
	},
	swipeRight:function()
	{
		this.prev();
	}
});