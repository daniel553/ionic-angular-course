import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
    private _bookings = new BehaviorSubject<Booking[]>([]);

    constructor(private authService: AuthService) { }

    get bookings() {
        return this._bookings.asObservable();
    }

    addBooking(
        placeId: string,
        title: string,
        image: string,
        firstName: string,
        lastName: string,
        guest: number,
        from: Date,
        to: Date) {
        const newBooking = new Booking(
            Math.random().toString(),
            placeId,
            this.authService.userId,
            title,
            image,
            firstName,
            lastName,
            guest,
            from,
            to);

        return this._bookings.pipe(
            take(1),
            delay(100),
            tap(bookings => {
                this._bookings.next(bookings.concat(newBooking));
            }));
    }
}
