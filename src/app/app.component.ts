import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'directive';
  couleur = 'yellow';


  constructor(private authService : AuthService){}


  myClick(event: any) {
    console.log(event);
  }

  login(roleSelected : string){
    console.log(roleSelected);
    this.authService.user.next({role:roleSelected})
  }
}
