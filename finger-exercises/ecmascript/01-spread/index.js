import isArray from "./utils";

export function min(...num) {
  switch (num.length) {
    case 0:
      return undefined;
    case 1:
      return isArray(num[0]) ? Math.min(...num[0]) : Math.min(num[0]);
    default:
      return Math.min(...num);
  }
}

export function copy(value) {
  return isArray(value) ? [...value] : { ...value };
}

export function reverseMerge(array1,array2) {
return [...array2,...array1]
}

export function filterAttribs() {}
