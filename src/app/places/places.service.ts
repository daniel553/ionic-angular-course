import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [];
  constructor(private authService: AuthService) {
    this.mockPlaces();
  }

  /**
   * Dummy loader
   */
  private mockPlaces() {
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
      this._places.push(p);
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
    return { ... this._places.find(p => p.id === id) };
  }

  addPlace(title: string, description: string, imageUrl: string, price: number, availableFrom: Date, availableTo: Date) {
    const newPlace = new Place(
      Math.random().toString(), title, description, imageUrl, price, availableFrom, availableTo, this.authService.userId);

    this._places.push(newPlace);
  }
}
