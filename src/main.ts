import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HeaderComponent } from './app/header/header.component';
import { CardComponent } from './app/card/card.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
