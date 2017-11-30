export {
  default as options,
  snapShot,
  buildJsxForGuideMethod,
  createWrapperWithContext,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from './common';
import _buttons from './Buttons';
import _forms from './Forms';
import _rating from './Rating';

export default {
  Buttons: {
    title: 'Buttons',
    sectionComponents: _buttons,
  },
  Forms: {
    title: 'Forms',
    sectionComponents: _forms,
  },
  Rating: {
    title: 'Rating',
    sectionComponents: _rating,
  },
};
