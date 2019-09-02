import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlacesService } from '../places.service';
import { Place } from './../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  loadedPlacesSub: Subscription;
  relevantPlaces: Place[];
  private filter = 'all';

  constructor(private placesService: PlacesService, private authService: AuthService) { }

  ngOnInit() {
    this.loadedPlacesSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.onFilterUpdate(this.filter);
    });
  }

  ngOnDestroy() {
    if (this.loadedPlacesSub) {
      this.loadedPlacesSub.unsubscribe();
    }
  }

  onFilterUpdate(filter: string) {
    const isShown = place => filter === 'all' || place.userId !== this.authService.userId;
    this.relevantPlaces = this.loadedPlaces.filter(isShown);
    this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    this.filter = filter;
  }

}
