/*Util functions to reuse*/

export function getObjectKeys(obj) {
  return Object.keys(obj);
}

export function getLastItem(path) {
  return path.substring(path.lastIndexOf('/') + 1);
}