import { Pipe, PipeTransform } from '@angular/core';
import { Months } from 'src/storage/months.storage';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

    transform(date: Date, ...args: any[]): any {
        date = new Date(date);
        let result: string;

        const condition: string = args[0];

        switch (condition) {
            case 'T:hh:mm': {
                let h: string | number = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
                let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
                result = `${h}:${m}`
                break;
            }

            case 'T:hh:mm:AMPM': {
                result = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                break;
            }

            case 'mmm-yyyy': {
                result = `${Months[date.getMonth()]} ${date.getFullYear()}`;
                break;
            }

            case 'mm/yyyy': {
                let m = date.getMonth() + 1
                let month: string = m < 10 ? `0${m}` : m.toString()
                result = `${month}/${date.getFullYear()}`
                break;
            }

            case 'dd/mm/yyyy': {
                let d = date.getDate()
                let m = date.getMonth() + 1
                let month: string = m < 10 ? `0${m}` : m.toString()
                result = `${d}/${month}/${date.getFullYear()}`
                break;
            }


            case 'mm/dd/yyyy': {
                let day = date.getDate()
                let m = date.getMonth() + 1
                let month: string = m < 10 ? `0${m}` : m.toString()
                result = `${month}/${day}/${date.getFullYear()}`
                break;
            }

            case 'yyyy': {
                result = date.getFullYear().toString()
                break;
            }

            default:
                result = date.toDateString();
                break;
        }

        return result;
    }


    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
}

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [CustomDatePipe],
    imports: [],
    exports: [CustomDatePipe],
    providers: [],
})
export class CustomDateModule { }