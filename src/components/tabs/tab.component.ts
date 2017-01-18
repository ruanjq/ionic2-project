import { Component,ViewChild } from '@angular/core';
import { Tabs,ModalController  } from 'ionic-angular';
import { HomePage } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { NewsComponent } from '../news/news.component';
import { LoginModalComponent } from '../modal/modal.login';
@Component({
    templateUrl: './tab.html'
})

export class TabsComponent {

	@ViewChild('appTabs') tabRef:Tabs;

    public rootHomePage: any = HomePage;
    public rootNewsPage: any = NewsComponent;
    public rootUserPage: any = UserComponent;
    constructor(public modalCtrl: ModalController){
    	
    }

    selectTab(index){

    	console.log(index);
        if(index == 3){
            this.presentModal();
        }
    	// this.tabRef.select(index);
    }

    presentModal(){
        let modal = this.modalCtrl.create(LoginModalComponent);
        modal.present();

        modal.onDidDismiss( data => {
            console.log(data);
        });
    }
}
