import { useState } from 'react';

export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// export function useRandom(initial) {
//   const [element, setElement] = useState(initial);

//   const selectRandom = () => {
//     const g = randomElement(colors);
//     setElement({
//       name: g.name,
//       colors: g.colors,
//       gradient: `linear-gradient(${randomInt(360)}deg, ${g.colors.join(', ')})`
//     });
//   };

//   return { select: selectRandom };
// }
