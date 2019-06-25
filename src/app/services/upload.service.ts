import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getVideos() {
    const url = `${ this.SERVER_URL }/api/v1/videos`;
    
    return this.http.get(url);
  }

  add( data ) {
    const url = `${ this.SERVER_URL }/api/v1/videos`;

    return this.http.post(url, data);
  }


  uploadFile( formData: FormData ) {
    const url = `${ this.SERVER_URL }/api/v1/videos/upload`;
    let data = {
      id: formData.get('id'),
      file: formData.get('video') 
    };
    console.log("enviando esto", data)
    return this.http.post(url, formData);
  }
}
