import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  Username=undefined;
  email=undefined;
  document:any;
  password=undefined;
  constructor(@Inject (DOCUMENT) document:Document,private router:Router) {
    this.document=document;
   }

  ngOnInit(): void {
  }
  signupdata(event:any){
    if(this.document.getElementById("Username").value=='lasya' &&this.document.getElementById("password").value=='lasyasri123' && this.document.getElementById("email").value=='lasya123@gmail.com'){
      alert('sign sucess');
      this.router.navigate(['']);
    }else{
      alert('sign failed');
    }

  }

}
