import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.item);
  }

  viewArtist( item: any ) {
    let artistId;

    if ( item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    console.log(artistId);
  }

}
