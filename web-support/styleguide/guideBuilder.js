import ArgParse from 'argparse';
import log from 'loglevel';
import path from 'path';
import { buildGuide } from '../sampleParser';
import samples from '../samples';

const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const ROOT_PATH = path.join(PROJECT_ROOT, 'src');
const GUIDE_DIR = path.join(PROJECT_ROOT, 'web-support', 'styleguide');
const EXAMPLES_DIR = path.join(GUIDE_DIR, 'examples');

const argParser = new ArgParse.ArgumentParser({
  version: '0.1.0',
  addHelp: true,
  description: 'parse component samples into react-styleguidist examples',
});

argParser.addArgument(['-d', '--dev'], {
  defaultValue: false,
  action: 'storeTrue',
  help: 'generate Development styleguide',
});

argParser.addArgument(['-p', '--prod'], {
  defaultValue: false,
  action: 'storeTrue',
  help: 'generate Production styleguide',
});

const opts = argParser.parseArgs();
log.debug({ opts });

if (opts.dev || opts.prod) {
  Object.assign(opts, { PROJECT_ROOT, ROOT_PATH, GUIDE_DIR, EXAMPLES_DIR });
  buildGuide(samples, opts);
}
