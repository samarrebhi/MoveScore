import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';



@Component({
  selector: 'app-offre1',
  templateUrl: './offre1.component.html',
  styleUrls: ['./offre1.component.css']
})
export class Offre1Component implements OnInit {

  formData: any = {};
  ngOnInit(): void {
   
  }
    selectedEducation: string = '';
    selectedOption: string = '';
    
    form: FormGroup;
  
    sortedUsers: any[] = [];
  fileToUpload: File | null = null;


    constructor(private router: Router, private http: HttpClient,private DataService: DataService, private formBuilder: FormBuilder,private dataService: DataService) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        selectedOption : ['', [Validators.required]],
        selectedOptionControl: ['DS', Validators.required],
        selectedEducationControl: ['ESPRIT', Validators.required],
        selectedEducation:['',Validators.required],
        fileUpload: [null, Validators.required],
        m1: [null, [Validators.required, Validators.min(0), Validators.max(20)]], // Example with validation range
        m2: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
        m3: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      })}
    
  
     
      
      onSelectedEducationChange() {
        this.selectedEducation = this.form.get('selectedEducation')?.value;
        console.log('Selected Education:', this.selectedEducation); // Debug line
      };
      onSelectedoptionChange() {
        this.selectedOption = this.form.get('selectedOption')?.value;
        console.log('Selected Option:', this.selectedOption);
      };
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
      if (this.form.valid) {
       
        const m1 = this.form.get('m2')?.value;
        const m2 = this.form.get('m2')?.value;
        const m3= this.form.get('m3')?.value;
        const name = this.form.get('name')?.value;
        const email = this.form.get('email')?.value;
        const selectedOption = this.form.get('selectedOption')?.value;
        const lastname = this.form.get('lastname')?.value;

    
        const formData = {
         
          m1:m1,
          m2:m2,
          m3:m3,
          name: name,
          email: email,
          lastname: lastname,
          selectedOption:selectedOption,

          score:((m1*1+m2*2+m3*3)/6),
        
      
        };
    
        
        console.log(formData);
      }
      
      this.http.post<any>('http://localhost:3000/api/insert', this.formData).subscribe(
        (response) => {
          console.log('Data inserted successfully:', response);
          // Clear the form or perform any other necessary actions
          this.formData = {};
        },
        (error) => {
          console.error('Error inserting data:', error);
        }
      );
    }
    

  }
   
