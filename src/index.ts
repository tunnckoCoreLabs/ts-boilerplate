export function add(a: number, b: number) {
  return a + b;
}

export function minus(x: number, yyy: number) {
  return x - yyy;
}

export function arrayify(val?: any) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return [val];
}

export function concat(abc: string) {
  return `${abc}-sasa`;
}
