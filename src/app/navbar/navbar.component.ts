import { Component, OnInit, HostListener } from '@angular/core';
import {AuthService} from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarCollapsed = true;
  mobile:Boolean;
  constructor(private flashMessagesService: FlashMessagesService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (window.innerWidth < 768) { // 768px portrait
      this.mobile = true;
    }
  }

  onLoguotClick(){
    this.authService.logout();
    this.flashMessagesService.show('Has cerrado sesion', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

  //if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event) {
    
     this.mobile = window.innerWidth< 768;
    
  }


}
