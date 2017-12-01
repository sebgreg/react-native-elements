export {
  default as options,
  snapShot,
  buildJsxForGuideMethod,
  createWrapperWithContext,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from './common';
import _avatar from './Avatar';
import _badge from './Badge';
import _buttons from './Buttons';
import _icons from './Icons';
import _forms from './Forms';
import _rating from './Rating';

export default {
  Avatar: {
    title: 'Avatar',
    sectionComponents: _avatar,
  },
  Badge: {
    title: 'Badge',
    sectionComponents: _badge,
  },
  Buttons: {
    title: 'Buttons',
    sectionComponents: _buttons,
  },
  Icons: {
    title: 'Icons',
    sectionComponents: _icons,
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
