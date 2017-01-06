
import { Component } from '@angular/core';

import { TabsComponent } from '../components/tabs/tab.component';
@Component({
  templateUrl: 'app.html',
  styleUrls: []
})
export class AppComponent {
	

	public rootPage:any = TabsComponent;

	constructor(){
		
	}


}