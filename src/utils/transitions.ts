export function fade(
  direction: 'in' | 'out',
  duration: number
): (el: Element, done: VoidFunction) => void {
  let sets =
    direction == 'in'
      ? [{ opacity: 0 }, { opacity: 1 }]
      : [{ opacity: 1 }, { opacity: 0 }];
  return (el, done) => {
    el.animate(sets, { duration }).finished.then(done);
  };
}

export function popTransition(
  duration: number
): (el: Element, done: VoidFunction) => void {
  return (el, done) => {
    el.animate(
      [{ opacity: 1 }, { opacity: 0, transform: 'scale3d(1.5, 1.5, 1.5)' }],
      { duration }
    ).finished.then(done);
  };
}
