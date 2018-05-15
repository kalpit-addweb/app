 import { Component, ViewChild, ViewContainerRef } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isCurrentPage:any = '';
  beforeLoginPages:any;
  mode = new FormControl('over');

    constructor (
    public route: ActivatedRoute,
    public router: Router 
    ) {
      
    }

    onActivate() {
    	this.isCurrentPage = this.route.snapshot.firstChild.url[0].path;
    	console.log('this.isCurrentPage',this.isCurrentPage);
    	if(this.isCurrentPage == 'login') {
    		this.beforeLoginPages = '0';
    	} else if(this.isCurrentPage == 'verify' || this.isCurrentPage == 'reset-password' || this.isCurrentPage == 'forget-password' || this.isCurrentPage == 'success-password') {
    		this.beforeLoginPages = '1';
    	} else {
    		this.beforeLoginPages = '2';
    	}
    	console.log('this.beforeLoginPages',this.beforeLoginPages);
    }
}