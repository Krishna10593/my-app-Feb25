import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent {
  weather:any="";

constructor(private _weatherService:WeatherService){
       _weatherService.getweather().subscribe(
      (data:any)=>{
        console.log(data);
      },(err:any)=>{
        alert("Internal server error");
      }
    )
}
}
