import 'particles.js';
import './form';
import Parallax from './parallax';

particlesJS('particles-js', require('../../assets/particles.json'));

const parallaxOptions = {
  '#hero .logo': {
    0: {
      top: -120,
      'letter-spacing': 1,
      opacity: 1,
    },
    '#skills': {
      top: 0,
      'letter-spacing': 50,
      opacity: 0.3,
    },
  },
  '#hero .description': {
    0: {
      top: 0,
    },
    '#skills': {
      top: 100,
    },
  },
  '#skills h1': {
    0: { top: -120 },
    150: { top: -20 },
  },
  '#image': {
    '#skills': {
      'background-position-y': -50,
    },
    '#process': {
      'background-position-y': 20,
    },
  },
  '#header nav': {
    0: {
      'background-color': 'transparent',
      'box-shadow': 'none',
      color: 'white',
      height: '80px',
      'font-size': '1.2rem',
    },
    20: {
      'background-color': 'transparent',
      'box-shadow': 'none',
      color: 'white',
      height: '80px',
      'font-size': '1.15rem',
    },
    40: {
      'background-color': 'transparent',
      'box-shadow': 'none',
      color: 'white',
      height: '80px',
      'font-size': '1.1rem',
    },
    60: {
      'background-color': 'transparent',
      'box-shadow': 'none',
      color: 'white',
      height: '80px',
      'font-size': '1.05rem',
    },
    80: {
      'background-color': 'white',
      'box-shadow': '0 1px 10px rgba(0, 0, 0, 0.2)',
      color: 'black',
      height: '58px',
      'font-size': '1rem',
    },
  },
  '#header nav .home': {
    0: {
      'border-bottom-color': 'transparent',
    },
    '#hero': {
      'border-bottom-color': '#ffca28',
    },
    '#skills': {
      'border-bottom-color': 'transparent',
    },
  },
  '#header nav .skills': {
    0: {
      'border-bottom-color': 'transparent',
    },
    '#hero': {
      'border-bottom-color': 'transparent',
    },
    '#skills': {
      'border-bottom-color': '#ffca28',
    },
    '#process': {
      'border-bottom-color': 'transparent',
    },
  },
  '#header nav .process': {
    0: {
      'border-bottom-color': 'transparent',
    },
    '#skills': {
      'border-bottom-color': 'transparent',
    },
    '#process': {
      'border-bottom-color': '#ffca28',
    },
    '#contact': {
      'border-bottom-color': 'transparent',
    },
  },
  '#header nav .contact': {
    0: {
      'border-bottom-color': 'transparent',
    },
    '#process': {
      'border-bottom-color': 'transparent',
    },
    '#contact': {
      'border-bottom-color': '#ffca28',
    },
  },
};

new Parallax(parallaxOptions);
