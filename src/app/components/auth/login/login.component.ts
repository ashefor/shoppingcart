import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CollectionService } from 'src/app/services/collection.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  length;
  cart = [];
  loginForm: FormGroup
  constructor(private ds: DataService, private cs: CollectionService, private formbuilder: FormBuilder, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.initialiseForm()
    this.collectAll();
    this.ds.currentItems.subscribe(items => this.cart = items);
    this.length = this.cart.length;
  }
  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.length = this.cart.length;
    })
  }

  initialiseForm() {
    this.loginForm = this.formbuilder.group({
      username: [''],
      password: ['']
    })
  }
  signIn(userCredentials) {
    this.authservice.loginUser(userCredentials.username, userCredentials.password);
    this.router.navigateByUrl('/collection')
  }
}
