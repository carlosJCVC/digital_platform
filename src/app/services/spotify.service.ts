import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA4i-zuNXc2Z8l3PPU-qpbqh3_QRMS523LBeMxwem9VViJ8dsbRbhPW0oz1LqIYc0_Z-9GwsSMIPs-4em4'
    });

    return this.http.get(url , { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( data => data['albums'].items ));
  }

  getTopTracksArtist(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
          .pipe( map( data => data['tracks'] ));
  }
}
