import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: ['tutorials/embassy'],
  coursesSidebar: [
    'courses/intro/rust_intro',
    'courses/gpio/gpio',
    'courses/pwm/pwm',
    'courses/async/async',
    'courses/spi/spi',
    'courses/i2c/i2c',
    'courses/wifi/wifi',
  ],
  labsSidebar: [
	  'labs/lab00',
	  'labs/lab01',
	  'labs/lab02',
	  /* 'labs/lab03' */
  ]
};

export default sidebars;
