import { Component, inject, OnInit } from '@angular/core';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.html',
})
export class Publications {
  private publicationService = inject(PublicationsService);
  publications = this.publicationService.publicationsSignal;
}
