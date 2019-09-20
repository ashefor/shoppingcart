import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  length: number;
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>
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

  showMenu(){
    this.navMenu.nativeElement.classList.toggle('is-active');
    this.menuBtn.nativeElement.classList.toggle('is-active')
  }
  onActivate(componentReference){
    componentReference.ds.currentItems.subscribe(data=>{
      this.length = data.length
    })
  }
}
