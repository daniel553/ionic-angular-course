import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [];
  constructor() {
    this.mockPlaces();
  }

  /**
   * Dummy loader
   */
  private mockPlaces() {
    let i = 0;
    while (i < 5) {
      this._places.push(new Place(
        'P' + i,
        'Beautiful place ' + i,
        'A very beautiful place you can check it out for this month',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Wollcott-house-museum-maumee-oh.jpg/1200px-Wollcott-house-museum-maumee-oh.jpg',
        (i + 1) * 100));
      i++;
    }
  }

  /**
   * Get a copy of places on demand
   */
  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {... this._places.find(p => p.id === id) };
  }
}
