import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  
  isRedText = false;

  toggleColor() {
    this.isRedText = !this.isRedText;
  }
  constructor(private router: Router) {}

  navigateToLogin() {
    // Use the router to navigate to the "login" route
    this.router.navigate(['/login']);
  }
  navigateToAuthAdmin() {
    this.router.navigateByUrl('/auth-admi'); // Navigate to AuthAdminComponent
  }

}
