import { Injectable, Inject, InjectionToken } from '@angular/core';

export interface AppConfig {
  mySetting: string;
}

export const APP_CONFIG = new InjectionToken<any>('App config');

@Injectable()
export class ConfigService {
  appConfig: AppConfig;

  constructor() {
    console.log('config service: Constructing service');}

  load() {
    console.log('config service: loading configuration');
    return new Promise((resolve, reject) => {
      this.appConfig = {
        mySetting: 'myValue'
      }
      setTimeout(() => {
        console.log('config service: Configuration loaded');
        resolve(true);
      }, 1000);
    });
  }
}