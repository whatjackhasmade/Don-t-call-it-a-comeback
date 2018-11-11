var decoded, elem;

export function decodeHTML(html) {
	elem = document.createElement("textarea");
	elem.innerHTML = html;
	decoded = elem.value;
	return decoded;
}
