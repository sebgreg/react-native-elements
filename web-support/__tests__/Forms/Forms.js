import path from 'path';
import { runTests, buildGuide } from '../../sampleParser';
import sections from '../../samples';

const EXAMPLES_DIR = path.resolve(
  __dirname,
  '../../../web-support/styleguide/examples'
);

const opts = { dev: true, EXAMPLES_DIR };

runTests(sections.Forms);
buildGuide({ Forms: sections.Forms }, opts);
