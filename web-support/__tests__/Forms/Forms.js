import path from 'path';
import { mount, render, shallow } from 'enzyme';
import merge from 'lodash.merge';
import parseSamples from 'enzyme-styleguidist-sample-parser';
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

// * not yet working
//
// const travelInTime = (ms, step = 100) => {
//   const tickTravel = v => {
//     jest.runTimersToTime(v);
//     const now = Date.now();
//     MockDate.set(new Date(now + v));
//   };

//   let done = 0;
//   while (ms - done > step) {
//     tickTravel(step);
//     done += step;
//   }
//   tickTravel(ms - done);
// };

const opts = {
  mocks: () => {
    Date.now = jest.fn(() => -3580994563);
  },
  log: 'WARN',
  enzyme: {
    run: true,
    createWrapper: createWrapperWithContext,
  },
  guide: {
    build: true,
    script:
      'const View = RN.View;\n' +
      'const TouchableHighlight = RN.TouchableHighlight;\n' +
      'const Text = RN.Text;\n\n',
    examplesDir: EXAMPLES_DIR,
  },
};

parseSamples({ Forms: sections.Forms }, opts);
