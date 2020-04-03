import { Injectable } from '@angular/core';

export enum ScrollDirection {
    UP = 'up',
    DOWN = 'down'
}

@Injectable({ providedIn: 'root' })
export class ScrollService {

    constructor() {
    }

    detectDirection(event: WheelEvent | any): ScrollDirection {
        let diretion: ScrollDirection

        if (event.wheelDelta == undefined && event.detail) {
            if (event.detail < 0) {
                // wheel up
                diretion = ScrollDirection.UP
            }
            else if (event.detail > 0) {
                // wheel down
                diretion = ScrollDirection.DOWN
            }
        }
        else if (event.wheelDelta) {
            if (event.wheelDelta > 0) {
                // wheel up
                diretion = ScrollDirection.UP
            } else if (event.wheelDelta < 0) {
                // wheel down
                diretion = ScrollDirection.DOWN
            }
        }

        return diretion
    }

}