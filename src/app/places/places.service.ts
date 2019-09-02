import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from './../auth/auth.service';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = new BehaviorSubject<Place[]>(this.mockPlaces());
  constructor(private authService: AuthService) {
    this.mockPlaces();
  }

  /**
   * Dummy loader
   */
  private mockPlaces() {
    let places = [];
    let i = 0;
    while (i < 3) {
      let p = new Place('P' + i,
        'Beautiful place' + i,
        'A very beautiful place you can check it out for this month',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Wollcott-house-museum-maumee-oh.jpg/1200px-Wollcott-house-museum-maumee-oh.jpg',
        100,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        'ID');
      places.push(p);
      i++;
    }
    return places;
  }

  /**
   * Get a copy of places on demand
   */
  get places() {
    return this._places.asObservable();
  }

  getPlace(id: string): Observable<Place> {
    return this.places.pipe(take(1), map(places => ({...places.find(p => p.id === id)})));
  }

  addPlace(title: string, description: string, imageUrl: string, price: number, availableFrom: Date, availableTo: Date) {
    const newPlace = new Place(
      Math.random().toString(), title, description, imageUrl, price, availableFrom, availableTo, this.authService.userId);

    /*From the places observable then
      subscribes to it but only take one object
      and then actomatically cancel the description.
    */
    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace));
    });
  }
}
