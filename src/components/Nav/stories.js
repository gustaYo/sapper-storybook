import { storiesOf } from '@storybook/svelte';
import Nav from './index.html';

storiesOf('Nav', module)
  .add('Default', () => ({
    Component: Nav,
  }))
  .add('About active', () => ({
    Component: Nav,
    data: {
      segment: 'about',
    },
  }))