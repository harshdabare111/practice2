import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
newname:any;
neweducation:any;
newaddress:any;
save(data:any)
{
  this.newname=data.value.name;
  this.neweducation=data.value.education;
  this.newaddress=data.value.address;
}
}
