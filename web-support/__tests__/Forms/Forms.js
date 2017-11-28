import path from 'path';
import { runTests, buildGuide } from '../../sampleParser';
import sections from '../../samples';

const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const ROOT_PATH = path.join(PROJECT_ROOT, 'src');
const GUIDE_DIR = path.join(PROJECT_ROOT, 'web-support', 'styleguide');
const EXAMPLES_DIR = path.join(GUIDE_DIR, 'examples');

const opts = { dev: true };
Object.assign(opts, { PROJECT_ROOT, ROOT_PATH, GUIDE_DIR, EXAMPLES_DIR });

runTests(sections.Forms);
buildGuide({ Forms: sections.Forms }, opts);
