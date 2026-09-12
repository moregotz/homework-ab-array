import ArrayBufferConverter from '../src/index.js';
import getBuffer from '../src/buffer.js';

test('converter1', () => {
  const textString = 'some text';
  const buffer = getBuffer(textString);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual(textString);
})

test('converter2', () => {
  const object = {
    'name': 'apple',
    'type': 'fruit'
  };
  const buffer = getBuffer(object);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(JSON.parse(result)).toEqual(object);
})

test('converter3', () => {
  const array = [1, 2, 3];
  const buffer = getBuffer(array);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(JSON.parse(result)).toEqual(array);
})
