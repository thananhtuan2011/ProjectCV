import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myName: string;
  myJob: string;
  contactDetails: any;

  constructor() {
    this.myName = 'Thân Anh Tuấn';
    this.myJob = 'Full Stack Developer';
    this.contactDetails = {
      phone: '0962934127',
      email: 'thananhtuan2011@gmail.com',
      facebook: 'https://www.facebook.com/iwehiop/',
      github: 'https://github.com/thananhtuan2011',
      stackoverflow: 'https://stackoverflow.com/users/2262856/abdo-host',
      linkedin: 'https://www.linkedin.com/in/abdohost',
      twitter: 'https://twitter.com/Abdo_Host'
    };
  }

  ngOnInit(): void {
  }

}
