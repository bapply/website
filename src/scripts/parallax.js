import { memoize } from './utils';

export default class Parallax {
  constructor(options) {
    this.parallax = this.parallax.bind(this);
    this.calculatePositions(options);
    // This allows for easier finding of the section when scrolling
    this.positionsArr = Object.keys(this.positions).reverse();
    document.addEventListener('scroll', this.parallax);
    // Run the code once to calculate the starting point
    this.parallax();
  }

  /**
   * Converts the received options to the following format:
   * {
   *   [position: number // if a selector is provided, get offset of that element]: {
   *     node: Node,
   *     state: { // styles of node in this section },
   *     diff: { // changes to the styles of the node }
   *   }
   * }
   */
  calculatePositions(options) {
    this.positions = Object.keys(options).reduce((tmp, key) => {
      const node = document.querySelector(key);
      const positions = Object.keys(options[key]);
      positions.map(computeSelector).forEach((pos, i, arr) => {
        const elRules = options[key];
        const state = elRules[positions[i]];
        if (!tmp[pos]) {
          tmp[pos] = [];
        }
        const nextState =
          i === positions.length - 1
            ? { position: arr[i], style: elRules[positions[i]] }
            : { position: arr[i + 1], style: elRules[positions[i + 1]] };

        const diff = Object.keys(elRules[positions[i]]).reduce((tmp, attr) => {
          if (typeof elRules[positions[i]][attr] === 'string') {
            tmp[attr] = elRules[positions[i]][attr];
          } else {
            const step =
              (nextState.style[attr] - state[attr]) /
              (nextState.position - pos);
            tmp[attr] = step;
          }
          return tmp;
        }, {});

        tmp[pos].push({
          node,
          state,
          diff,
        });
      });
      return tmp;
    }, {});
  }

  /**
   * Applies the required changes when scrolling
   */
  parallax() {
    const scrollTop =
      (document.scrollingElement.scrollTop /
        document.scrollingElement.clientHeight) *
      100;
    // Find which section we're in
    const section = this.positions[
      this.positionsArr.find(pos => pos <= scrollTop)
    ];
    // Each section contains a bunch of elements, loop through them and apply their changes
    section.forEach(eles => {
      Object.keys(eles.diff).forEach(attr => {
        if (typeof eles.diff[attr] === 'string') {
          eles.node.style[attr] = eles.diff[attr];
        } else {
          eles.node.style[attr] =
            eles.diff[attr] * scrollTop +
            eles.state[attr] +
            (attr !== 'opacity' ? 'px' : '');
        }
      });
    });
  }
}

const computeSelector = memoize(key => {
  if (/[\.#a-zA-Z]/.test(key)) {
    return (
      (document.querySelector(key).offsetTop /
        document.scrollingElement.clientHeight) *
      100
    );
  }

  return parseInt(key, 10);
});
