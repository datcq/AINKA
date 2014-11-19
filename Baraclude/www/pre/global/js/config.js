var anddev = anddev || {};
anddev.config = {
	animation:true
};
anddev.config.include = {
	core: ['../../../pre/global/css/font.css'],
    navigation: ['menu/custom'],
    content: ["plugins/plugins.js","../../../pre/global/js/js.js"]
};

anddev.config.navigation = {
    name: 'Baraclude',
    slides: {
        data: 'pre/slides.json',
        folder: 'pre/assets/%slide.name%/',
        index: 'index.html'
    },
    flows: {
        list: {
            main: "pre/flows/main.json"
        }
    },
    stage: {
        layout: { width: 1280, height: 752 }
    },
    slider: {
        layout: { width: 1280, height: 752 },
        duration: 700,
		range: {
            index: 0,
            size: 1
        }
    },
    menu: {
		slideSorterPath : "pre/captures/%slide.name%.jpg",
		layout: { width: 1024, height: 100, top: 668, left: 0 },
        thumbPath: "pre/thumbnails/%slide.name%.jpg",
        showTitle: true,
        autoShowSubmenu: true,
        plugin: 'customMenu',
        type: 'custom' //add this if using custom menu
    }
};