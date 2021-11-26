import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VilleDetail } from 'src/app/models/ville-detail.model';
import { VilleLink } from 'src/app/models/ville-link.model';
import { Ville } from 'src/app/models/ville.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private readonly _apiUrl = "http://localhost:8080/ville";

  constructor(private _client: HttpClient) { }

  sendImg( toSend: File ): void{
    const formData = new FormData();
    formData.append('file', toSend, toSend.name);
    this._client.post(this._apiUrl+'/test', formData).subscribe(e => console.log(e));
  }

  insertVille( toInsert: Ville ){
    const formData = new FormData();
    formData.append('file', toInsert.img, toInsert.img.name);
    formData.append('city_name', toInsert.nom);
    return this._client.post(this._apiUrl, formData);
  }

  insertVilleViaLink( toInsert: VilleLink ) : Observable<VilleDetail>{
    return this._client.post(this._apiUrl + "/link", toInsert) as Observable<VilleDetail>;
  }

  getVille( id: number ) : Observable<VilleDetail>{
    return this._client.get(this._apiUrl + "/" + id) as Observable<VilleDetail>;
  }


}
