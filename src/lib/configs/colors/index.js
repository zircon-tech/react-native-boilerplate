import * as button from './button';
import * as input from './input';
import * as spinner from './spinner';
import * as modal from './modal';

const combined = {...button, ...input, ...spinner, modal};

export default combined;
