import { NgModule } from '@angular/core';

import { IonicApp, IonicModule, Platform ,AlertController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';

/**
 * app.modules 需要导入所有的组件
 */
import { AppComponent } from './app.component';
import { HomePage } from '../components/home/home.component';
import { TabsComponent } from '../components/tabs/tab.component';
import { UserComponent } from '../components/user/user.component';
import { NewsComponent } from '../components/news/news.component';
import { NewsDetailsComponent } from '../components/news/news.details.component';
import { LoginModalComponent } from '../components/modal/modal.login';



import '../styleSheet/scss/index';

@NgModule({
    declarations: [
        AppComponent, HomePage, TabsComponent,
        UserComponent, NewsComponent, NewsDetailsComponent,LoginModalComponent
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
    entryComponents: [AppComponent, TabsComponent, HomePage, UserComponent, NewsComponent, NewsDetailsComponent,LoginModalComponent],
    providers: []
})
export class AppModule {

    constructor(public platform: Platform,public alertCtrl:AlertController) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            this.registerBackButtonListener();
        })
    }

    registerBackButtonListener() {
        this.platform.registerBackButtonAction(function (res) {
            console.log(res);
        });
    }

    confirmExitApp(nav) {
        let confirm = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Really exit app?',
            buttons: [{
                text: 'Cancel',
                handler: () => {
                    console.log('Disagree clicked');
                }
            }, {
                text: 'Exit',
                handler: () => {
                    
                }
            }]
        });
        nav.present(confirm);
    }

  
}
