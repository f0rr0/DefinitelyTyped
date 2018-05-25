// Type definitions for @storybook/addon-options 3.4.5
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Options {
    name?: string;
    url?: string;
    goFullScreen?: boolean;
    showStoriesPanel?: boolean;
    showAddonPanel?: boolean;
    showSearchBox?: boolean;
    addonPanelInRight?: boolean;
    sortStoriesByKind?: boolean;
    hierarchySeparator?: RegExp | string;
    hierarchyRootSeparator?: RegExp | string;
    sidebarAnimations?: boolean;
    selectedAddonPanel?: string;
}

export function setOptions(options: Options): void;
