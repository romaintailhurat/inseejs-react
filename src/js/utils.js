// @flow
export function range(n : number) : Array<number> {
  return Array.from(new Array(n), (x, i) => i);
}
