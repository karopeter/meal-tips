import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(public authService: AuthService) {}


  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
       this.userIsAuthenticated = isAuthenticated;
    });
 }

 ngOnDestroy() {
   this.authListenerSubs.unsubscribe();
 }
}
