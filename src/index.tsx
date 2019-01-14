export function add(a: number, b: number) {
  return a + b;
}

/**
 *
 * TODO: okey then
 * ! break this rule here
 * ? should we do this heeere...
 *
 * SOme and #e3c99a color
 * here rgba(100,111,190,0.8) yeah
 *
 * @param x - somekkk
 * @param yyy - okey
 */
export function minus(x: number, yyy: number) {
  return x - yyy;
}

// ! breaking change, next release
export function arrayify(val?: any) {
  if (!val) return [];
  if (Array.isArray(val)) {
    return val;
  }
  return [val, 123];
}

export function concat(abc: string) {
  return `${abc}-sasa`;
}
