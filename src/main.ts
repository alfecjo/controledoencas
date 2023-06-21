import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      { provide: LOCALE_ID, useValue: 'pt' },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ],
  })
  .catch((err) => console.error(err));
