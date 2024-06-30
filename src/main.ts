import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import routes from './app/app-routing.module'
import {provideRouter} from "@angular/router";


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
