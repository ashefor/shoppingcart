import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  length: number;


  constructor(private authservice: AuthService){

  }
  
  get isLoggedIn(){
    return this.authservice.isLoggedIn
  }
  
  get username(){
    if(this.authservice.currentUser){
      return this.authservice.currentUser.userName
    }
  }

  logOut(){
    this.authservice.logoutUSer()
  }
  onActivate(componentReference){
    componentReference.ds.currentItems.subscribe(data=>{
      this.length = data.length
    })
  }
}
