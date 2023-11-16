import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; // Import throwError here

@Component({
  selector: 'app-offre6',
  templateUrl: './offre6.component.html',
  styleUrls: ['./offre6.component.css']
})
export class Offre6Component {
  selectedEducation: string = '';
  selectedoption: string = '';
  form: FormGroup;
  user: any;
  fileToUpload: File | null = null;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    // Initialize the form controls using FormBuilder
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedoption: ['DS', Validators.required],
      selectedEducation: ['ESPRIT', Validators.required],
      moyenne1: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      moyenne2: [null, [Validators.required,Validators.min(0), Validators.max(20)]],
      moyenne3: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      moyenne4: [null, [Validators.min(0), Validators.max(20)]],
      fileUpload: [null] 
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      // Calculate the score based on the averages
      let score: number;
    if (formData.selectedEducation === 'Licence') {
      score = (formData.moyenne1 + formData.moyenne2 + formData.moyenne3 * 2 + formData.moyenne4) / 5;
    } else {
      score = (formData.moyenne1 + formData.moyenne2 + formData.moyenne3 * 2) / 4;
    }

    formData.score = score;
      // Send the form data to the backend
      this.http.post('http://localhost:3100/api/submit-form', formData)
        .subscribe(response => {
          console.log('Form submitted successfully', response);
          this.user = response;
        }, error => {
          console.error('Error submitting form', error);
        });
    }
  }

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0]; // Store the uploaded file
  }
  onSelectedEducationChange() {
    this.selectedEducation = this.form.get('selectedEducation')?.value;
    console.log('Selected Education:', this.selectedEducation); // Debug line
  }
  onSelectedoptionChange() {
    this.selectedoption = this.form.get('selectedoption')?.value;
    console.log('Selected Option:', this.selectedoption);
  }}