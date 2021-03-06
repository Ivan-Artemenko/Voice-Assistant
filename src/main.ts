import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentNew } from './environments/environmentNew';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environmentNew.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
