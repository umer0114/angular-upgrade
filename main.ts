import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// errors.ts:30 ERROR Error: AngularJS v1.x is not loaded!
import { setAngularLib } from '@angular/upgrade/static';

import * as _angular_ from 'angular';

declare global {
  const angular: typeof _angular_;
}

setAngularLib(angular);

platformBrowserDynamic().bootstrapModule(AppModule);
