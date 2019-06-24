import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: String;
  constructor(private spotiServ: SpotifyService) { }

  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.spotiServ.getNewReleases()
      .subscribe( (data: any) => {
        this.items = data;
        this.loading = false;
      }, ( { error } ) => {
        this.messageError = error.error.message;
        this.error = true;
        this.loading = false;
      });
  }

}
