import { Magician, Daemon } from '../src/players.js';

test('totalAttack1', () => {
  const evilMagician = new Magician(100, 1, false);
  expect(evilMagician.attack).toBeCloseTo(100);
});

test('totalAttack3', () => {
  const goodMagician = new Magician(100, 3, false);
  expect(goodMagician.attack).toBeCloseTo(80);
});

test('totalAttack2Stoned', () => {
  const madDaemon = new Daemon(100, 2, true);
  expect(madDaemon.attack).toBeCloseTo(85);
});

test('totalAttack5Stoned', () => {
  const kindDaemon = new Daemon(100, 5, true);
  expect(kindDaemon.attack).toBeCloseTo(48, 0);
});
