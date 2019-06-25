import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
    //console.log("mi video" ,this.item.path);
  }

  viewArtist( item: any ) {
    let artistId;

    if ( item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

  }

  toggleVideo(event: any) {
    console.log(this.videoplayer)
    this.videoplayer.nativeElement.play();
  }

}
