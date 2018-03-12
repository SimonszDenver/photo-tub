import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  onButtonClick(): void {
    this.router.navigateByUrl('/edit-image');
  }

}
