async function load() {
    return await Promise.resolve('Async test..');
}

load().then(data => console.log('babel.js', data))

class Utils {
    static name = 'utils-class';
}

console.log(Utils.name);