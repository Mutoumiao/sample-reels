window.addEventListener("DOMContentLoaded",
function() {
	if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		try {
			if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			    // 移动端
				userAngent = "mobile";
			} else if (/iPad/i.test(navigator.userAgent)) {
			    // ipad
				userAngent = "ipad"
			}
			isMobile = true;
		} catch(e) {}
	} else {
		// PC端
		userAngent = "window";
	};
});
