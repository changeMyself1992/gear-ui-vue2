import scriptjs from 'scriptjs';

export default function(array) {
  array = array || [];
  return new Promise(resolve => {
    scriptjs(array, () => {
      resolve();
    });
  });
}
