import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  bookings: Booking[];
  bookingsSub: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingsSub = this.bookingService.bookings.subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  ngOnDestroy() {
    if (this.bookingsSub) {
      this.bookingsSub.unsubscribe();
    }
  }

  onCancelBooking(placeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    // Todo Cancel
  }

}
