import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import {DomSanitizer} from '@angular/platform-browser';
import {DataService} from "../shared/services/data.service";

const uri = 'http://localhost:4200/assets/uploaded-images';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {

  url = null;
  constructor(private router: Router,
              private dataservice: DataService) {
  }

  ngOnInit() {
  }
  redirect(): void {
    this.router.navigate(['/edit-image']);

  }

  readUrl(event: any) {
       const reader = new FileReader();
      reader.onload = (event1: any) => {
        this.dataservice.url = event1.target.result;

        if (this.dataservice.url != null) {
          this.redirect();
        }
      };
       reader.readAsDataURL(event.target.files[0]);
  }
}
