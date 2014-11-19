$.Controller("Anddev.Button", {
}, {
    init: function () {

    },
    ".button tapone": function (el, ev) {
        var button = el;
        if (button.hasClass("disable") == true)//button is disabled
            return;
        button.data("tapone").apply(this, [button.hasClass("active"),button, ev]);
    },
    add: function (buttonId, buttonFunction) {
        $('<div class="button ' + buttonId + '" ></div>').data("tapone", buttonFunction).appendTo(this.element);
    },
    remove: function (buttonId) {
        $("." + buttonId, this.element).remove();
    },
    active: function (buttonId) {
        $("." + buttonId, this.element).addClass("active");
    },
    deactive: function (buttonId) {
        $("." + buttonId, this.element).removeClass("active");
    },
    enable: function (buttonId) {
        $("." + buttonId, this.element).removeClass("disable");
    },
    disable: function (buttonId) {
        $("." + buttonId, this.element).addClass("disable");
    }
});
anddev.button = $("<div class='buttons'></div>").appendTo("#stage #menu").anddev_button().controller();