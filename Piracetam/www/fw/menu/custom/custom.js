steal('//menu/custom/css/menu.css').then(function () {

    anddev.Controllers.Menu.Submenu('anddev.Controllers.Menu.Custom',
    /** @Static */
    {
        pluginName: 'customMenu',
        defaults: {
            template: '//menu/custom/views/asset.ejs'
        }
    },
    /** @Prototype */
    {
        defaultHeight: 0,
        init: function () {
            this.clickTime = 0;
            this._super();            
        },       
        '{window} tapone': function () {
            this.hideSubMenu();
        },
		'.asset.submenu tapone': function (el, ev) {
			console.log("Submenu: "+el.data('models').asset.path)
			ev.stopPropagation();
			
			this.hideSubMenu();
            anddev.navigation.goToAsset(el.data('models').asset.path);
		},
        '.asset:not(.disabled) tapone': function (el, ev) {
        	console.log(el)
			ev.stopPropagation();
            var self = this;
			
            self.clickTime++;
            if (self.clickTime == 1) {
				setTimeout(function () {
					if (self.clickTime == 1) {
						self.hideSubMenu();
                        anddev.navigation.goToAsset(el.data('models').asset.path);
                    } else {
                        self.hideSubMenu();
                        self.showSubmenu(el);
						
						console.log("Show submenu");
                    }
                    self.clickTime = 0;
                }, 300);
            }
        },
        '.asset:not(.disabled) longtap': function (el, ev) {
            return false;
        }
    });
});