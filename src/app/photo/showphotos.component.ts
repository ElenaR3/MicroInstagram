import { Component,Output, OnInit, Injectable } from '@angular/core'
import { PhotosResolver } from './photos.resolve'
import { photoInfo } from './photo.model'
import { DisplayPhotos } from './display-photos.service';
import { UploadPhoto } from '../upload-photo/upload-photo.component'
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject } from 'rxjs';
import {
  Router,
  ActivatedRoute,
  RouterEvent,
  NavigationStart,
  NavigationEnd
} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
selector: '<show-photos>',
templateUrl:'./show-photos.component.html',
styleUrls: ['./show-photos.component.css']

})           


export class ShowPhotos implements OnInit {
  
photos_:any
 clicked:boolean=false
  

 private url = 'https://jsonplaceholder.typicode.com/photos';  
  
  constructor(private http: HttpClient, private displayPhotos: DisplayPhotos, private router: Router
    , private SpinnerService: NgxSpinnerService) {  

  }  

   photos: any
  title = '';
  isLoader: boolean;


  ngOnInit() {
    this.retrievePhotos();

  }

  retrievePhotos(): void {
    this.SpinnerService.show();  
    this.displayPhotos.getAll()
      .subscribe(
        data => {
          this.photos = data;
          console.log(data);
          this.SpinnerService.hide();
        },
        error => {
          console.log(error);
        });
  } 

 

}

