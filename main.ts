import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Config } from './config/config.service';

console.log('Initializing application');
Config.loadInstance('config.json')
    .then(() => {
      platformBrowserDynamic().bootstrapModule(AppModule)
        .then(ref => {
          // Ensure Angular destroys itself on hot reloads.
          if (window['ngRef']) {
            window['ngRef'].destroy();
          }
          window['ngRef'] = ref;

          // Otherwise, log the boot error
        }).catch(err => console.error(err));
});