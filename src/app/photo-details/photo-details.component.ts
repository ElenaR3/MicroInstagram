import { Component, OnInit, Input } from '@angular/core'
import { PhotosResolver } from '../photo/photos.resolve'
import { photoInfo } from '../photo/photo.model'
import { DisplayPhotos } from '../photo/display-photos.service'
import { ActivatedRoute, Router } from "@angular/router";  
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast'


@Component({
    selector:'photo-details',
    templateUrl:'./photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})

export class PhotoDetails implements OnInit{
   @Input() photo: photoInfo


  
  constructor(    
    private displayPhotos: DisplayPhotos,  
    private route: ActivatedRoute  ,
    private router: Router
  ) {}  
  
  ngOnInit() {  

    this.getPhoto(this.route.snapshot.paramMap.get('id'));

  }  

  getPhoto(id): void {
    this.displayPhotos.get(id)
      .subscribe(
        data => {
          this.photo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updatePhoto(): void {
    this.displayPhotos.update(this.photo.id, this.displayPhotos)
      .subscribe(
        response => {
          console.log(response);
        /*  this.message = 'You have successfully edited this photo!'; */
        },
        error => {
          console.log(error);
        });
  }

  deletePhoto(): void {
    this.displayPhotos.delete(this.photo.id)
      .subscribe(
        response => {
          console.log(response);
        this.router.navigate(['/photos']); 
        },
        error => {
          console.log(error);
        });
  }

  goBack () {
    this.router.navigate(['photos']);
  }

  confirmDeletion(name: string) {
    if(confirm("Are you sure you want to delete this photo?")) {
      this.deletePhoto();
    }
  }
 

}