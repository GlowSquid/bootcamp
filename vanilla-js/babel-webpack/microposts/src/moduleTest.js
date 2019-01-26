export const sounds = {
  one: 'BAAAM!',
  two: 'BOOOM!'
};

export function makeSound() {
  return `SWOOOOOOSH ${sounds.two}`;
}
