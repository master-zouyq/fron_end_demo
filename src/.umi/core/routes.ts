// @ts-nocheck
import { ApplyPluginsType } from '/Users/zouyaqing/Desktop/react-components/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('/Users/zouyaqing/Desktop/react-components/src/layout/index').default,
    "routes": [
      {
        "key": "/tool/hook",
        "paht": "/tool/hook",
        "component": require('/Users/zouyaqing/Desktop/react-components/src/pages/hooks/index').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
