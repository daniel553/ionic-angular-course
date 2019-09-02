import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {

  offers: Place[] = [];
  private offersSub: Subscription;

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offersSub = this.placesService.places.subscribe(places => {
      this.offers = places;
    });
  }

  ngOnDestroy() {
    if (this.offersSub) {
      this.offersSub.unsubscribe();
    }
  }



  /**
   * Ion item sliding can be passed as an argument to proposes as navigation (and close it)
   */
  onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('ID', id);
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
  }
}
