import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VilleDetail } from 'src/app/models/ville-detail.model';
import { VilleService } from 'src/app/services/api_service/ville.service';

@Component({
  selector: 'app-ville-detail',
  templateUrl: './ville-detail.component.html',
  styleUrls: ['./ville-detail.component.css']
})
export class VilleDetailComponent implements OnInit {

  private villeId: number = 0;
  ville: VilleDetail | undefined;
  villeImg: string = '';

  constructor(activatedRoute: ActivatedRoute, serv: VilleService) {

    this.villeId = activatedRoute.snapshot.params["id"];
    serv.getVille( this.villeId ).subscribe({
      next: (resp) => {
        this.ville = resp;

        // Créer lien image
        this.villeImg = 'data:' + this.ville.imgType + ';base64,' + this.ville.imgBytes;

      }
    })

  }

  ngOnInit(): void {
  }

}
