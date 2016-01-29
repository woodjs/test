'use strict';
const guthrieSettings = {
  defaultDirectories: {
    controllers: '/controllers',
    views: '/views',
    areas: '/areas'
  },
  viewsExt: '',
  controllerNameAffix: 'Controller',
  defaultAction: 'index',
  configFile: 'web.json'
};

function abc() {
  this.guthrie = this.guthrie || {};
  guthrieSettings.viewsExt = 'jjjj';
  Object.assign(guthrieSettings, this.guthrie);
  console.log(guthrieSettings);
  this.guthrie = guthrieSettings;
  console.log(this.guthrie);
}

abc.call({guthrie: {defaultDirectories: 111122}});