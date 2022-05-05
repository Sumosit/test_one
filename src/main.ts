import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@environment/environment';

if (environment.production) {
  enableProdMode();
}

// var Stomp = require('@stomp/stompjs');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
