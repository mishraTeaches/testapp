import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router:Router) { }

  ngOnInit() {
$("body").css("background-color","black");
  }
  submit(){
    localStorage.setItem("token","23bhysdsd5656sdsdsqqqqq78888hhh4tgsdsds");
this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    $("body").css("background-color","");
  }
}
