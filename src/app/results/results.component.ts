import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import{ MailService} from '../mail.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class resultsComponent implements OnInit{
  data: any[] = [];

  
  constructor(private DataService: DataService ,private MailService :MailService ) {}

// saving data from db
  ngOnInit(): void {
    this.DataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  sendEmails() {
   

    
    this.MailService.getEmailAddresses().subscribe((email1) => {
      console.log(email1);

    });
  
   
  }

  
}