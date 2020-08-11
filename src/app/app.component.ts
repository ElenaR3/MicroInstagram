import { Component, OnInit } from '@angular/core';
import { photoInfo } from './photo/photo.model'
import { ShowPhotos } from './photo/showphotos.component'
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd
} from "@angular/router";
import { DisplayPhotos } from './photo/display-photos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'micro-instagram';

  isLoader: boolean;

  constructor(private _router: Router, private displayPhoto: DisplayPhotos) {}

}
