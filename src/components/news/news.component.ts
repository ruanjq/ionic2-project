import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewsDetailsComponent } from './news.details.component';

@Component({
	templateUrl:'./news.html'
})
export class NewsComponent{

	constructor(public navCtrl: NavController){
		/*this.pushPage = NewsDetailsComponent;
		this.params = {id:36,name:'ruanjq'}*/
	}

	goDetails(){
		console.log(11);
		this.navCtrl.push(NewsDetailsComponent, {id:36,name:'ruanjq'});
	}
}