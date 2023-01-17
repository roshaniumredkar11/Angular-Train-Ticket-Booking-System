import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trainName="Pune-Nagpur Express[12121]"
  avalTicket=100;

  bookTicket(){
    if(this.avalTicket!=1){
      this.avalTicket--;
      this.avalTicket=this.avalTicket;
      console.log(this.avalTicket)
    }
   
  }

  cancleTicket(){
    if(this.avalTicket!=100){
      this.avalTicket++;
      this.avalTicket=this.avalTicket;
      console.log(this.avalTicket)
    }
   
   
  }
}