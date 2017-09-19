const toXml = j => !j || typeof j !== 'object' ? `${j}\n` :
    Object.keys(j).reduce((a, t) => `${a}<${t}>\n${toXml(j[t])}</${t}>\n`, '');

const toJson = xml => {
    const stack = [];
    const json = {};
    const arr = xml.replace(/<\//gi, '\n<').replace(/>|\//gi, '\n').split(/\s|\t|\n|\\/).filter(x => x != '');
    arr.forEach((a, i) => {
        const key = stack.reduce((x, val) => x[val] = x[val] || (a[0] === '<' ? {} : a), json);
        if (a[0] === '<')
            stack[stack.length - 1] != a.slice(1) ? stack.push(a.slice(1)) : stack.pop();
    })
    return json;
}

module.exports = {
    toXml,
    toJson
}