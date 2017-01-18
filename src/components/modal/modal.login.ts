import { Component } from '@angular/core';
import { ViewController, ToastController, LoadingController } from 'ionic-angular';

@Component({
    template: `
		<ion-header>
		    <ion-navbar color="primary">
		        <ion-title>
		        	用户登录
		        </ion-title>

		        <ion-buttons end>
		            <button ion-button (click)="hideModal()">
		                cancel
		            </button>
		        </ion-buttons>
		    </ion-navbar>
		</ion-header>
		<ion-content>
			<ion-list>
			  <ion-item>
			    <ion-label floating>Username</ion-label>
			    <ion-input type="text"></ion-input>
			  </ion-item>

			  <ion-item>
			    <ion-label floating>Password</ion-label>
			    <ion-input type="password"></ion-input>
			  </ion-item>

			</ion-list>
			<div padding>
				<button ion-button block (click)="onLogin()">Login in</button>
			</div>
		</ion-content>
	`,

})
export class LoginModalComponent {

    constructor(public viewCtrl: ViewController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    }

    hideModal() {
        this.viewCtrl.dismiss({ a: 1, b: 2 });
    }

    onLogin() {
    	this.presentLoadingCustom().then(() => {
    		this.viewCtrl.dismiss({ a: 1, b: 2 });
    		this.presentToast().then(() => {
    		});
    	});
    }


    presentToast() {
        return new Promise((resolve,reject) => {
        	let toast = this.toastCtrl.create({
	            message: 'login successfully',
	            duration: 3000,
	            position: 'top'
	        });
	        toast.onDidDismiss(() => {
	        	resolve();
	            console.log('Dismissed toast');
	        });

	        toast.present();
        });
    }



    presentLoadingCustom() {
    	return new Promise((resolve,reject) => {
    		let loading = this.loadingCtrl.create({
	            spinner: 'ios',
	            content: `
			      <div class="custom-spinner-container">
			        <div class="custom-spinner-box">Loading...</div>
			      </div>`,
	            duration: 5000
	        });

	        loading.onDidDismiss(() => {
	        	resolve();
	            console.log('Dismissed loading');

	        });

	        loading.present();
    	});

        
    }

}
