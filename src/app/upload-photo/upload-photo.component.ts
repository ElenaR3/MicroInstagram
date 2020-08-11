import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DisplayPhotos } from '../photo/display-photos.service'
import { HttpClient, HttpHeaders } from "@angular/common/http";  
import { photoInfo } from '../photo/photo.model'
import { PhotoDetails } from '../photo-details/photo-details.component'
import { PhotoDetailResolver } from '../photo-details/one-photo.resolve'
import { ShowPhotos } from '../photo/showphotos.component'
import { Routes, RouterModule } from "@angular/router";
import { PhotosResolver } from '../photo/photos.resolve'



@Component({
selector: 'upload-photo',
templateUrl:'./upload-photo.component.html'
})

export class UploadPhoto implements OnInit{

  photos_:any
  data: any

    newPhoto = {
      
      albumId:0,
      id: 0,
      title: ' ',
      url: '',
      thumbnailUrl: ' '
    } 
      submitted = false;

      private url = 'https://jsonplaceholder.typicode.com/photos';  

      constructor(private http: HttpClient, private displayPhotos: DisplayPhotos, private router: Router) {  
       
      }  

  ngOnInit(): void {
    this.http.get(this.url)  
    .subscribe(response => {  
      this.photos_ = response 
    });  
  }

  savePhoto(albumId:HTMLInputElement, title:HTMLInputElement, url: HTMLInputElement, thumb: HTMLInputElement ): void {
    let data=
     {
      
     albumId: albumId.value, 
       title: title.value,
       url: url.value,
       thumbnailUrl:thumb.value
   };

    this.displayPhotos.create(data)
      .subscribe(
        response => {
          data.albumId=response.albumId, 
          data.title=response.title,
          data.url=response.url,
          data.thumbnailUrl=response.thumbnailUrl,
          this.photos_.push(this.data)
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }
          
        addNewPhoto(): void {
            this.submitted = false;
            this.newPhoto = {
                albumId: 0,
                id: 0,
                title: '',
                url: '',
                thumbnailUrl: ''
            };
          }


          cancel(){
            this.router.navigate(['/photos'])
        }

  }


