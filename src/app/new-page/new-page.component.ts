import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {
  title = 'stage';
  selectedOption:String='';

  constructor(private router: Router, private route: ActivatedRoute) {}
  

  onNext() {
    
    switch (this.selectedOption) {
      case 'dd-supgalilée':
        this.router.navigate(['/offre1']);
        break;
      case 'dd-sherbrooke':
        this.router.navigate(['./offre2']);
        break;
        case 'dd-ensim':
        this.router.navigate(['./offre3']);
        break;
        case 'se-ensim':
        this.router.navigate(['./offre4']);
        break;
        case 'ms-cy':
        this.router.navigate(['./offre5']);
        break;
        case 'ms-eurocom':
        this.router.navigate(['./offre6']);
        break;
        default:
        break;
        
    }
}}
