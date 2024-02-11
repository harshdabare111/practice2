import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// newname:any;
// neweducation:any;
// newcollage:any;
nusername:any;
npassword:any
url="http://localhost:3245/home"
msg:any
constructor(private http:HttpClient)
{

}

save(data:any)
{
  // this.newname=data.value.name;
  // this.neweducation.value.education;
  // this.newcollage.value.collage;
  this.nusername=data.value.username;
  this.npassword=data.value.npassword;
  this.http.post(this.url,{"username1":data.value.username,"password1":data.value.password})
.subscribe((e)=>{
  this.msg=e})}
}


   

