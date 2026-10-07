/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

registerRoute(
  new NavigationRoute(
    createHandlerBoundToURL(`${process.env.PUBLIC_URL}/index.html`),
    {
      denylist: [/^\/_/, fileExtensionRegexp],
    },
  ),
);
