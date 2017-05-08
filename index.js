const toXml = (json) => {
	if (typeof json === 'string') return `${json}\n`;
	let xml = '';
	for (let tag in json) xml += `<${tag}>\n${toXml(json[tag])}</${tag}>\n`;
	return xml;
}

const toJson = xml => {
	var stack = [];
	var json = {};
	var arr = xml.replace(/<\//gi, '\n<').replace(/>|\//gi, '\n').split(/\s|\t|\n|\\/).filter(x => x != '');
	for (var i = 0; i < arr.length; i++) {
		var key = stack.reduce((x, val) => x[val] = x[val] || (arr[i][0] === '<' ? {} : arr[i]), json);
		if (arr[i][0] === '<')
			stack[stack.length - 1] != arr[i].slice(1) ? stack.push(arr[i].slice(1)) : stack.pop();
	}
	return json;
}

module.exports = {
	toXml,
	toJson
}