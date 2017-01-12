import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';


/**
 * app.modules 需要导入所有的组件
 */
import { AppComponent } from './app.component';
import {  HomePage } from '../components/home/home.component';
import { TabsComponent } from '../components/tabs/tab.component';
import { UserComponent } from '../components/user/user.component';
import { NewsComponent } from '../components/news/news.component';
import { NewsDetailsComponent } from '../components/news/news.details.component';



import '../styleSheet/scss/index';

@NgModule({
    declarations: [
        AppComponent,HomePage,TabsComponent,
        UserComponent,NewsComponent,NewsDetailsComponent
    ],
    imports: [
       
        IonicModule.forRoot(AppComponent, {
            backButtonText: 'Go Back',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios'
        }, {})
    ],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent,TabsComponent,HomePage,UserComponent,NewsComponent,NewsDetailsComponent],
    providers: []
})
export class AppModule{}



