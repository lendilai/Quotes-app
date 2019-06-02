import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(value:any): number {
    let today:Date = new Date();
    let todayDateOnly:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var milliSecondsPassed = Math.abs(todayDateOnly - value);
    var secondsPassed = milliSecondsPassed*0.001;
    const secondsPerDay = 86400;
    var daysPassed = secondsPassed/secondsPerDay;
    var newDaysPassed = Math.round(daysPassed);

    if(newDaysPassed >= 1){
      return newDaysPassed;
    }else{
      return 0;
    }
  }

}
