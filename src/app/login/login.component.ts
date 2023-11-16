import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 



// Validator pour la taille de l'identifiant
const usernameLengthValidator: ValidatorFn = (control: AbstractControl) => {
  const username = control.value;
  if (username && username.length !== 10) {
    return { invalidUsernameLength: true };
  }
  return null;
};

// Validator pour vérifier que l'identifiant contient uniquement des lettres en majuscule et des chiffres
const usernameUpperCaseDigitsValidator: ValidatorFn = (control: AbstractControl) => {
  const username = control.value;
  if (username && !/^[A-Z0-9]+$/.test(username)) {
    return { nonUpperCaseDigitsInUsername: true };
  }
  return null;
};
const passwordLengthValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.value;
  if (password && password.length !== 8) {
    return { invalidPasswordLength: true };
  }
  return null;
};

// Validator pour vérifier que le mot de passe contient uniquement des chiffres
const passwordDigitsOnlyValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.value;
  if (password && !/^\d+$/.test(password)) {
    return { nonDigitsInPassword: true };
  }
  return null;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  "loginForm": FormGroup;

  constructor(private formBuilder: FormBuilder ,private http: HttpClient,private router: Router) {}
 
  message: string = '';
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', [Validators.required, usernameLengthValidator, usernameUpperCaseDigitsValidator]],
      motDePasse: ['', [Validators.required, passwordLengthValidator, passwordDigitsOnlyValidator]]
    });}
  
  

  onSubmit(){
    if (this.loginForm.valid) {
          const identifiant = this.loginForm.value.identifiant;
          const motDePasse = this.loginForm.value.motDePasse;
      
          const requestBody = { id:identifiant, mdp: motDePasse }; 
          
          this.http.post<any>('http://localhost:3000/login', requestBody)
            .subscribe(
              (response) => {
                //this.message = response.message;
                this.isAuthenticated = true;
                this.router.navigate(['/new-page']);
               },
              (error) => {
                this.message='Erreur d\'authentification! Veuillez vérifier vos coordonnées!';
                
              })}}
           
          
  
        }