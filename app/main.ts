import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { bind } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

bootstrap(AppComponent, [HTTP_PROVIDERS]);