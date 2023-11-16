import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offre4',
  templateUrl: './offre4.component.html',
  styleUrls: ['./offre4.component.css']
})
export class Offre4Component implements OnInit {

 
  ngOnInit(): void {
    // Initialization logic here
  }
    selectedEducation: string = '';
    selectedOption: string = '';
    moyenne3: number = 0;
    form: FormGroup;


    constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        selectedOptionControl: ['DS', Validators.required],
        selectedEducationControl: ['ESPRIT', Validators.required],
        fileUpload: [null, Validators.required],
        moyenne1: [null, [Validators.required, Validators.min(0), Validators.max(20)]], // Example with validation range
        moyenne2: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
        moyenne3: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      })}
    
  
      backtochoix() {
        this.router.navigate(['new-page']); 
      }
    onFileChange(event: any) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileUpload: file
      });
    }
    onSubmit() {
      console.log('Form validity:', this.form.valid);
      console.log('Form value:', this.form.value);
  
      if (this.form.valid) {
        const formData = this.form.value;
  
        this.http.post('http://localhost:3000/api/submit-form', formData).subscribe(
          response => {
            console.log('Form submitted successfully!', response);
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
      } else {
        console.log('Form is not valid.');
      }
    }}
   
