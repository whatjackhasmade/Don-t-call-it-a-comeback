export function decodeHTML(html) {
	html = html.replace("amp;", "");
	return html.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
	});
}
