import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DataService} from "../shared/services/data.service";
import {isUndefined} from "util";

const uri = 'http://localhost:4200/assets/effects';

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

    var files = event.target.files;
    var output = document.getElementById('result');
    for(var i=0;i<files.length;i++){
      var file = files[i];
      var reader = new FileReader();
      reader.onload = (event1: any) => {
        var picFile = event1.target;
        this.dataservice.url.push(picFile.result);
        if(!isUndefined(this.dataservice.url)){
          this.redirect();
        }
      };
      reader.readAsDataURL(file);
    }

  }

}
