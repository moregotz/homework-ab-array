function getBuffer(data) {
  let someData = data;
  if (typeof data !== 'string') {
    someData = JSON.stringify(data);
  }
  return ((input) => {
    const buffer = new ArrayBuffer(someData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(someData);
}

export default getBuffer;
