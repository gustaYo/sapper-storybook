import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import MyButton from './Button.svelte';

storiesOf('MyButton', module)
  .add('with text', () => ({
    Component: MyButton,
    data: {
      text: 'some text',
    },
    on: {
      click: action('Button ckicked'),
    },
  }))