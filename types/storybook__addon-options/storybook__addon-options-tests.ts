import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'My Storybook',
  url: 'https://example.com',
  goFullScreen: false,
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  sidebarAnimations: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  selectedAddonPanel: 'storybook/notes/panel'
});

setOptions({
  hierarchySeparator: '.',
});
