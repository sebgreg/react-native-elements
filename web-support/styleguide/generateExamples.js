// @flow
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { exec } from 'child_process';
import StringBuilder from 'string-builder';
import jsxToString from 'react-element-to-jsx-string';
import log from 'loglevel';
import sampleSections from '../samples';

log.setLevel('debug');
log.debug({ sampleSections });

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const ROOT_PATH = path.join(PROJECT_ROOT, 'src');
const GUIDE_DIR = path.join(PROJECT_ROOT, 'web-support', 'styleguide');
const EXAMPLES_DIR = path.join(GUIDE_DIR, 'examples');

log.debug({
  PROJECT_ROOT,
  ROOT_PATH,
  GUIDE_DIR,
  EXAMPLES_DIR,
});

sampleSections.forEach(({ sectionName, componentSamples }) => {
  log.info(`Processing Section: ${sectionName}`);
  const exampleBuilder = new StringBuilder();
  const sectionsBuilder = new StringBuilder();

  componentSamples.forEach(component => {
    const exampleFilename = path
      .join(EXAMPLES_DIR, component.name)
      .concat('.md');
    log.debug({ component });

    component.samples.forEach(sample => {
      if (!sample.skip) {
        exampleBuilder.appendLine('[//]: # (** auto-generated **)\n');
        exampleBuilder.appendLine('### ');
        exampleBuilder.append(sample.title);

        sample.chunks.forEach(example => {
          exampleBuilder.appendLine('#### ');
          exampleBuilder.append(example.name);
          exampleBuilder.appendLine('```js');
          if (example.script) exampleBuilder.appendLine(example.script);
          if (example.script) exampleBuilder.appendLine();
          if (example.styleExample) {
            exampleBuilder.appendLine(example.styleExample);
          } else {
            exampleBuilder.appendLine(
              jsxToString(example.jsx, {
                showFunctions: true,
                showDefaultProps: false,
              })
            );
          }
          exampleBuilder.appendLine('```');
        });
      }
    });
    fse.outputFileSync(exampleFilename, exampleBuilder.toString());
    exampleBuilder.clear();
  });
});
