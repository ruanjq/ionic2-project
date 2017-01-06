import { Component } from '@angular/core';
import { NavController, Slides, ActionSheetController,AlertController  } from 'ionic-angular';
@Component({
    selector: 'page-home',
    templateUrl: './home.html'
    // styles: ["" + require('./home.scss') + ""]
})

export class HomePage {

    // 配置slides 组件选项
    public bannerSlidesOpt: any = {
        initialSlide: 1,
        loop: true,
        autoplay: 2000,
        pager: true
    }
    constructor(public actionSheetCtrl: ActionSheetController,public alertCtrl:AlertController) {
    	
    }

    showActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [{
                text: 'Destructive',
                role: 'destructive',
                handler: () => {
                    console.log('Destructive clicked');
                }
            }, {
                text: 'Alert',
                handler: () => {
                    this.showAlert();
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        actionSheet.present();
    }

    showAlert(){
        let alert = this.alertCtrl.create({
            title:'New Friend',
            subTitle:'ha ahaha ',
            buttons:['ok']
        });
        alert.present();
    }
}
