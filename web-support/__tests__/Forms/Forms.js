import path from 'path';
import { mount, render, shallow } from 'enzyme';
import merge from 'lodash.merge';
import parseSamples from '../../sampleParser';
import sections from '../../samples';

const EXAMPLES_DIR = path.resolve(
  __dirname,
  '../../../web-support/styleguide/examples'
);

const buildCtxOptions = ctxArr => {
  let options = { context: {}, childContextTypes: {} };
  ctxArr.forEach(ctx => {
    if (ctx.type && ctx.type === 'func') {
      const mockFunc = jest.fn();
      mockFunc.mockReturnValue(ctx.value);
      options = merge(options, {
        context: { [ctx.name]: mockFunc },
        childContextTypes: { [ctx.name]: toPropType(ctx.type) },
      });
    }
  });
  return options;
};

const toPropType = typeId => {
  switch (typeId) {
    case 'func':
      return PropTypes.func;
    default:
      return null;
  }
};

const createWrapperWithContext = (depth, jsx, ctx) => {
  let wrapper;
  let ctxOpts = {};
  if (ctx) ctxOpts = buildCtxOptions(ctx);
  switch (depth) {
    case 'mount':
      wrapper = mount(jsx, ctxOpts);
      break;
    case 'shallow':
      delete ctxOpts.childContextTypes;
      wrapper = shallow(jsx, ctxOpts);
      break;
    case 'render':
      wrapper = render(jsx);
      break;
    default:
  }
  return wrapper;
};

const opts = {
  enzyme: {
    run: true,
    createWrapper: createWrapperWithContext,
  },
  guide: true,
  EXAMPLES_DIR,
};

parseSamples({ Forms: sections.Forms }, opts);
