import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private _lastValidatedColor : string = "#FFFFFF";
  private _colorChangedObs = new BehaviorSubject<string>( this._lastValidatedColor );

  constructor() { }

  validateColor(color: string){
  
    if( color.match("#[0-9a-fA-F]{6}" ) ){
      this._lastValidatedColor = color;
      this._colorChangedObs.next( color );
    }
  }

  subscribeToColorChanged( callback: (value: string) => void ){
    this._colorChangedObs.subscribe( callback );
  }
}
