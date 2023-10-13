export const computeQty = (stock: number, num: number, current: number) => {
  if (num < 0 && current === 1) {
    return 1;
  } else if (num > 0 && current >= (stock ?? 1)) {
    return current;
  } else {
    return current + num;
  }
};
