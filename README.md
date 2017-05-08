# ay-json-xml
[![npm version](https://img.shields.io/badge/npm-1.0.1-green.svg)](https://www.npmjs.com/package/ay-json-xml)

turn json to xml and xml to json

### Install:
```
npm install ay-json-xml
```
### Usage Example:
```javascript
const {toXml, toJson} = require('ay-json-xml');
const json = {
	person: {
		name: {
			first: 'john',
			last: 'doe'
		}
	}
};
const xml = toXml(json);
const jsonAgain = toJson(xml);
```

### Output - xml
```xml
<person>
<name>
<first>
john
</first>
<last>
doe
</last>
</name>
</person>
```
### Output - json
```javascript
{ person: { name: { first: 'john', last: 'doe' } } }
```