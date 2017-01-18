import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

console.log(process.env );

if (process.env === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);



if(process.env === 'production'){
    createMetaTag();addCordovaScript()
}
function createMetaTag(){
    var meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;";
    document.getElementsByTagName('head')[0].appendChild(meta);
}
function addCordovaScript(){
    var cordova = document.createElement('script');
    cordova.type = "text/javascript";
    cordova.src = "cordova.js";
    document.getElementsByTagName('head')[0].appendChild(cordova);
}
