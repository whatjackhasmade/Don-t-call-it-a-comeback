export function decodeHTML(html) {
	var decoded, elem;
	if (typeof document !== "undefined") {
		elem = document.createElement("textarea");
		elem.innerHTML = html;
		decoded = elem.value;
		return decoded;
	}
}
