import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PublicationInterface } from './publication-interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private http = inject(HttpClient);
  private dataUrl = 'assets/data/data.json';
  private publications$: Observable<PublicationInterface[]> = this.http.get<PublicationInterface[]>(
    this.dataUrl
  );
  public publicationsSignal = toSignal(this.publications$, { initialValue: [] });

  getPublicationObservable(): Observable<any[]> {
    return this.publications$;
  }
}
