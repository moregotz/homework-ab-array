function getBuffer(data) {
  var someData = data;
  if (typeof data !== 'string') {
    someData = JSON.stringify(data);
  }
  return function (input) {
    var buffer = new ArrayBuffer(someData.length * 2);
    var bufferView = new Uint16Array(buffer);
    for (var i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  }(someData);
}
export default getBuffer;