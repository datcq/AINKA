(function (anddev) {
	anddev.ready(function ($) {
		if ('ontouchstart' in document.documentElement)
			return;
		//--------------Begin:webview-----------
		anddev.player.connector.createWebview = function (name, x, y, w, h) {
			$("<iframe></iframe>").attr("id", name).appendTo("body").css({
				left : x,
				top : y,
				position : "relative",
				"z-index" : 1
			}).width(w).height(h);
		}
		anddev.player.connector.showWebview = function (name, url) {
			$("iframe#" + name).attr("src", url);
		}
		anddev.player.connector.removeWebview = function (name) {
			$("iframe#" + name).remove();
		}
		//--------------End:webview-----------
	});
})(anddev || {});
