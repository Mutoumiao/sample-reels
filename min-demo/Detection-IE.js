var browser = navigator.appName
var b_version = navigator.appVersion
var version = b_version.split(";");
var trim_Version = version[1].replace(/[ ]/g, "");
if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
	alert("IE 6.0");
} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
	alert("IE 7.0");
} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
	alert("IE 8.0");
} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
	alert("IE 9.0");
}
