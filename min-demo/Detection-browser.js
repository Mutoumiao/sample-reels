var browserName = navigator.userAgent.toLowerCase();
if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
	alert("IE");
	return;
} else if (/firefox/i.test(browserName)) {
	alert("Firefox");
	return;
} else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
	alert("Chrome");
	return;
} else if (/opera/i.test(browserName)) {
	alert("Opera");
	return;
} else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
	alert("Safari");
	return;
} else {
	alert("unKnow");
}
