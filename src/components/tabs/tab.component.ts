import { Component,ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { NewsComponent } from '../news/news.component';

@Component({
    templateUrl: './tab.html'
})

export class TabsComponent {

	@ViewChild('appTabs') tabRef:Tabs;

    public rootHomePage: any = HomePage;
    public rootNewsPage: any = NewsComponent;
    public rootUserPage: any = UserComponent;
    constructor(){
    	
    }

    selectTab(index){
    	console.log(index);
    	// this.tabRef.select(index);
    }
}
