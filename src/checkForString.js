export function checkDataForString(data) {
  if (typeof data !== 'string') {
   throw new Error('The data should be a string.');
  }
}

export function checkFileNameForString(fileName) {
  if (typeof fileName !== 'string') {
   throw new Error('The filename should be a string.');
  }
}
