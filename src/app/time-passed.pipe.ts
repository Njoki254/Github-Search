import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(created_at: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var daysDifference = Math.abs(todayWithNoTime - created_at) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var daysDifferenceSeconds = daysDifference*0.001; //converts miliseconds to seconds
    var daysCounter = daysDifferenceSeconds/secondsInDay;

    if (daysCounter >= 1 && created_at < todayWithNoTime){
      return daysCounter;
    }else{
      return 60;
    }
  }
}