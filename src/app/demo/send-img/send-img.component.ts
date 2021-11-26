import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { VilleService } from 'src/app/services/api_service/ville.service';

@Component({
  selector: 'app-send-img',
  templateUrl: './send-img.component.html',
  styleUrls: ['./send-img.component.css']
})
export class SendImgComponent implements OnInit {

  imgSelected: File | undefined;  // image dans l'input
  imgPreview: string | undefined; // image transformé en lien affichable
  nomVille: string= '';

  constructor(private _serv: VilleService) { }

  ngOnInit(): void {
  }

  onChange(event: any){
    console.log(event)
    this.imgSelected = event.target.files[0];

    const reader = new FileReader();
    if( this.imgSelected ){
      reader.readAsDataURL( this.imgSelected as Blob );
      reader.onload = ( progressEvent ) => this.imgPreview = reader.result as string;
    }
  }

  onSend(){
    if( this.imgSelected )
      this._serv.sendImg(this.imgSelected);
  }

  onInsert(){
    if( this.imgSelected )
      this._serv.insertVille( {
        nom: this.nomVille,
        img: this.imgSelected
      } ).subscribe(console.log);
  }

  onInsertViaLink(){

    if( this.imgPreview )
      this._serv.insertVilleViaLink( {
        nom: this.nomVille,
        lien: this.imgPreview
      } ).subscribe( (resp) => alert('inséré [' + resp.id + ']') )

  }

}
