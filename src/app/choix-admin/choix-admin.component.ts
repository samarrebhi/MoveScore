import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choix-admin',
  templateUrl: './choix-admin.component.html',
  styleUrls: ['./choix-admin.component.css']
})
export class ChoixAdminComponent {
  title = 'stage';
  selectedOption:String='';

  constructor(private router: Router, private route: ActivatedRoute) {}
  

  onNext() {
    
    switch (this.selectedOption) {
      case 'dd-supgalilée':
        this.router.navigate(['/results']);
        break;
      case 'dd-sherbrooke':
        this.router.navigate(['./results']);
        break;
        case 'dd-ensim':
        this.router.navigate(['./results']);
        break;
        case 'se-ensim':
        this.router.navigate(['./results']);
        break;
        case 'ms-cy':
        this.router.navigate(['./results']);
        break;
        case 'ms-eurocom':
        this.router.navigate(['./results']);
        break;
        default:
        break;
        
    }}
}
