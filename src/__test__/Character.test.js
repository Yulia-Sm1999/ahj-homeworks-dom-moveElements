import Character from '../js/Character';
import img from '../img/goblin.png';

test('should make character image', () => {
  const character = new Character(img);
  expect(character.createCharacter().src).toBe(img);
});
