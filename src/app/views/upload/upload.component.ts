import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item/fileItem';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  item = {
    name: null,
    video: null
  };

  files: FileItem[] = [];
  isAboutElement: boolean = false;

  constructor(private uploadService: UploadService, private router: Router) { }

  ngOnInit() {
  }

  cleanFiles(){}

  saveData() {
    let formData = new FormData();
    formData.append('video', this.files[0].file);

    this.uploadService.add(this.item).subscribe( data => {
      //console.log("respuest", data['video'].name);
      formData.append('id', data['video']._id);
      this.uploadService.uploadFile( formData ).subscribe( res => {
        this.router.navigate(['/']);
      });
    });
  }
}
