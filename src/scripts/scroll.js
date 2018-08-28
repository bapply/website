const navbar = document.querySelector('header#header nav');
const parallaxElements = Array.from(
  document.querySelectorAll('[data-scroll]'),
).reduce((tmp, node) => {
  const states = node.dataset.scroll.split(';').reduce((stateTmp, state) => {
    stateTmp[
      state
        .split(':')[0]
        .trim()
        .replace('%', '')
    ] = parseInt(
      state
        .split(':')[1]
        .trim()
        .replace('px', ''),
      10,
    );
    return stateTmp;
  }, {});

  tmp.push({
    node,
    state: scrollTop => {
      const positions = Object.keys(states);
      const from = positions
        .reverse()
        .find(position => parseInt(position, 10) <= scrollTop);
      const to = positions.find(
        position => parseInt(position, 10) >= scrollTop,
      );
      const state = {
        from: { scroll: from, top: states[from] },
        to: { scroll: to, top: states[to] },
      };

      return {
        step:
          (state.to.top - state.from.top) /
            (state.to.scroll - state.from.scroll) || 0,
        start: state.from.top,
      };
    },
  });
  return tmp;
}, []);

const handleParllax = () => {
  const height = document.scrollingElement.clientHeight;
  const scrollTop = document.scrollingElement.scrollTop;
  const topPercent = (scrollTop / height) * 100;
  parallaxElements.forEach(el => {
    const state = el.state(topPercent);
    el.node.style.top = `${state.start + topPercent * state.step}px`;
  });
};

const sections = ['hero', 'skills', 'shit', 'crap'];
const handleNavbar = () => {
  const height = document.scrollingElement.clientHeight;
  const scrollTop = document.scrollingElement.scrollTop;
  const sectionNumber = scrollTop / height;
  sections.forEach((section, i) => {
    if (i - 0.2 < sectionNumber && sectionNumber < i + 0.8) {
      navbar.classList.add(`in-${section}`);
    } else {
      navbar.classList.remove(`in-${section}`);
    }
  });
};

handleParllax();

document.addEventListener('scroll', () => {
  handleParllax();
  handleNavbar();
});
