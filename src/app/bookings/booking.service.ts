import { Injectable } from '@angular/core';

import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
    private _bookings: Booking[];

    constructor() {
        this._bookings = [];
        for (let i = 0; i < 3; i++) {
            this._bookings.push(new Booking('b' + i, 'u' + i, 'Title ' + i, i));
        }
    }

    get bookings() {
        return [... this._bookings];
    }
}
