import { configure, addParameters } from '@storybook/svelte';

import myTheme from './myTheme';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    theme: myTheme,
  },
});

function loadStories() {
  require('../src/components/.stories')
}

configure(loadStories, module);
