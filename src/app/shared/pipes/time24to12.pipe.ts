import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'time24to12' })
export class Time24to12Format implements PipeTransform {
  
  transform(time: any): any {
    try {
      var time24To12 = function(a) {
          //below date doesn't matter.
          return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
              timeZone: "UTC",
              hour12: !0,
              hour: "numeric",
              minute: "numeric"
          });
      };
    } catch (error) {
      return ""
      
    }
    return time24To12(time); 
  }
}