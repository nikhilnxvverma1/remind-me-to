import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgExtensionAppComponent } from '../app/ng-extension.component';

beforeEachProviders(() => [NgExtensionAppComponent]);

describe('App: NgExtension', () => {
  it('should create the app',
      inject([NgExtensionAppComponent], (app: NgExtensionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-extension works!\'',
      inject([NgExtensionAppComponent], (app: NgExtensionAppComponent) => {
    expect(app.title).toEqual('ng-extension works!');
  }));
});
