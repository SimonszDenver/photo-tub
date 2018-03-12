import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

const uri = 'http://localhost:4200/assets/uploaded-images';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {
  // uploader: FileUploader = new FileUploader({url: uri});
  // attachmentList: any = [];
  constructor(private router: Router) {
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, header: any) => {
    //   this.attachmentList.push(JSON.parse(response));
    // };
  }

  ngOnInit() {
  }
  onButtonClick(): void {
    this.router.navigateByUrl('/edit-image');
  }
}
